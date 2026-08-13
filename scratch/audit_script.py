import os
import re

with open('scratch_docx_dump.txt', 'r', encoding='utf-8') as f:
    docx_text = f.read()

# Normalize whitespace function
def norm(text):
    return ' '.join(text.split()).lower()

docx_norm = norm(docx_text)

def find_in_docx(text):
    clean = text.strip()
    if not clean or len(clean) < 3: return True, 'EMPTY'
    clean_n = norm(clean)
    if clean_n in docx_norm:
        return True, 'MATCH'
    # Try searching for substring sentences
    sentences = [s.strip() for s in re.split(r'[.!?]', clean) if len(s.strip()) > 15]
    if sentences:
        matched_sentences = sum(1 for s in sentences if norm(s) in docx_norm)
        if matched_sentences == len(sentences):
            return True, 'SENTENCES_MATCH'
        elif matched_sentences > 0:
            return False, f'PARTIAL_MATCH ({matched_sentences}/{len(sentences)})'
    return False, 'NOT_FOUND'

pages = [
    ('Home', 'src/pages/Home.jsx'),
    ('AIFunctions', 'src/pages/AIFunctions.jsx'),
    ('IoTSoftware', 'src/pages/IoTSoftware.jsx'),
    ('HardwareTechnologies', 'src/pages/HardwareTechnologies.jsx'),
    ('Integration', 'src/pages/Integration.jsx'),
    ('Applications', 'src/pages/Applications.jsx'),
    ('Resources', 'src/pages/Resources.jsx'),
    ('About', 'src/pages/About.jsx'),
    ('Contact', 'src/pages/Contact.jsx')
]

for name, path in pages:
    print('='*70)
    print(f'AUDITING {name} ({path})')
    if not os.path.exists(path):
        print('FILE NOT FOUND')
        continue
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    headings = re.findall(r'<h[1-6][^>]*>(.*?)</h[1-6]>', content, re.DOTALL)
    paragraphs = re.findall(r'<p[^>]*>(.*?)</p>', content, re.DOTALL)
    divs = re.findall(r'<(?:div|span)[^>]*>(.*?)</(?:div|span)>', content, re.DOTALL)

    print(f'\n--- HEADINGS ({len(headings)}) ---')
    for h in headings:
        clean_h = re.sub(r'<[^>]+>', '', h).strip()
        found, match_type = find_in_docx(clean_h)
        status = "PASS" if found else "FAIL"
        print(f'[{status}] [{match_type}] "{clean_h[:80]}"')

    print(f'\n--- PARAGRAPHS ({len(paragraphs)}) ---')
    for p in paragraphs:
        clean_p = re.sub(r'<[^>]+>', '', p).strip()
        if len(clean_p) < 15: continue
        found, match_type = find_in_docx(clean_p)
        status = "PASS" if found else "FAIL"
        print(f'[{status}] [{match_type}] "{clean_p[:100]}..."')
