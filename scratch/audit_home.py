import re

with open('scratch_docx_dump.txt', 'r', encoding='utf-8') as f:
    raw_docx = f.read()

# Strip out paragraph markers like P7015: from docx
clean_docx = re.sub(r'P\d+:\s*', '', raw_docx)

def norm(t):
    return ' '.join(t.split()).lower()

norm_docx = norm(clean_docx)

with open('src/pages/Home.jsx', 'r', encoding='utf-8') as f:
    home_code = f.read()

lines = home_code.split('\n')
pass_count = 0
fail_count = 0

for i, line in enumerate(lines):
    clean = re.sub(r'<[^>]+>', '', line).strip()
    # Strip quotes or punctuation around array strings
    clean = clean.strip('",\'[]')
    if clean and not clean.startswith('import') and not clean.startswith('return') and not clean.startswith('export') and not clean.startswith('const') and not clean.startswith('//') and not clean.startswith('/*') and not clean.startswith('}') and not clean.startswith('{') and len(clean) > 8:
        clean_n = norm(clean)
        if clean_n in norm_docx:
            pass_count += 1
            print(f'L{i+1}: [PASS - DOCX MATCH] "{clean[:70]}"')
        else:
            fail_count += 1
            print(f'L{i+1}: [FAIL - NOT IN DOCX] "{clean[:70]}"')

print(f"\nTOTAL TEXT NODES CHECKED: {pass_count + fail_count}")
print(f"PASS (DOCX MATCH): {pass_count}")
print(f"FAIL (UNAUTHORIZED): {fail_count}")
if fail_count == 0:
    print("100% STRICT DOCX COMPLIANT!")
