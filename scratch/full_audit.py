import os
import re

with open('scratch_docx_dump.txt', 'r', encoding='utf-8') as f:
    docx_text = f.read()

def norm(text):
    return ' '.join(text.split()).lower()

docx_norm = norm(docx_text)

# Check exact or normalized match
def classify_text(text):
    clean = text.strip()
    if not clean or len(clean) < 3:
        return 'SKIP'
    clean_n = norm(clean)
    if clean_n in docx_norm:
        return 'A. DOCX EXACT MATCH'
    
    # Check if sentence fragments exist in docx
    sentences = [s.strip() for s in re.split(r'[.!?]', clean) if len(s.strip()) > 15]
    if sentences:
        matched = sum(1 for s in sentences if norm(s) in docx_norm)
        if matched == len(sentences):
            return 'B. DOCX CONTENT WITH FORMATTING-ONLY CHANGE'
        elif matched > 0:
            return f'C. AI/UNAUTHORIZED CONTENT (Partial match {matched}/{len(sentences)})'
    
    return 'C. AI/UNAUTHORIZED CONTENT'

pages = [
    ('Homepage', 'src/pages/Home.jsx'),
    ('AI Functions', 'src/pages/AIFunctions.jsx'),
    ('IoT Software', 'src/pages/IoTSoftware.jsx'),
    ('AI & IoT Hardware', 'src/pages/HardwareTechnologies.jsx'),
    ('Integration', 'src/pages/Integration.jsx'),
    ('Applications', 'src/pages/Applications.jsx'),
    ('Resources', 'src/pages/Resources.jsx'),
    ('About Us', 'src/pages/About.jsx'),
    ('Contact Us', 'src/pages/Contact.jsx')
]

results = {}

for p_name, p_path in pages:
    p_res = {
        'exact': 0,
        'formatting': 0,
        'unauthorized': 0,
        'missing': 0,
        'unauthorized_items': [],
        'missing_items': [],
        'total_items': 0
    }
    
    if not os.path.exists(p_path):
        p_res['unauthorized_items'].append(('File Missing', 'C. AI/UNAUTHORIZED CONTENT'))
        results[p_name] = p_res
        continue

    with open(p_path, 'r', encoding='utf-8') as f:
        code = f.read()

    # Extract headings, paragraphs, and list items
    elements = re.findall(r'<(?:h[1-6]|p|li|span|div)[^>]*>(.*?)</(?:h[1-6]|p|li|span|div)>', code, re.DOTALL)
    
    # Clean tags and check each element
    checked = set()
    for el in elements:
        clean_el = re.sub(r'<[^>]+>', '', el).strip()
        # Skip small code snippets / layout tags
        if not clean_el or len(clean_el) < 12 or clean_el in checked:
            continue
        if clean_el.startswith('import') or clean_el.startswith('export') or clean_el.startswith('const') or clean_el.startswith('function'):
            continue
        checked.add(clean_el)
        
        classification = classify_text(clean_el)
        p_res['total_items'] += 1
        
        if classification == 'A. DOCX EXACT MATCH':
            p_res['exact'] += 1
        elif classification == 'B. DOCX CONTENT WITH FORMATTING-ONLY CHANGE':
            p_res['formatting'] += 1
        else:
            p_res['unauthorized'] += 1
            p_res['unauthorized_items'].append((clean_el, classification))

    results[p_name] = p_res

print("="*80)
print("SUMMARY OF AUDIT BY PAGE")
print("="*80)
for p_name, res in results.items():
    tot = res['total_items']
    ex = res['exact']
    fmt = res['formatting']
    unauth = res['unauthorized']
    pct = round(((ex + fmt) / tot * 100), 1) if tot > 0 else 0
    status = "PASS" if unauth == 0 and tot > 0 else "FAIL"
    print(f"{p_name}: [{status}] - {pct}% Compliant ({ex} exact, {fmt} fmt, {unauth} unauth / {tot} total)")
