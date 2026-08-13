import re
import html

with open('scratch_docx_dump.txt', 'r', encoding='utf-8') as f:
    raw_docx = f.read()

# Strip paragraph numbers like P7015:
clean_docx = re.sub(r'P\d+:\s*', '', raw_docx)

def norm(t):
    t_clean = html.unescape(t)
    return ' '.join(t_clean.split()).lower()

norm_docx = norm(clean_docx)

with open('src/pages/HardwareTechnologies.jsx', 'r', encoding='utf-8') as f:
    page_code = f.read()

# Remove JSX comments & JavaScript code blocks
page_clean = re.sub(r'\{/\*.*?\*/\}', '', page_code, flags=re.DOTALL)

strings_to_check = []

# Extract strings in JSX arrays
arrays = re.findall(r'\[(.*?)\]', page_clean, re.DOTALL)
for arr in arrays:
    items = re.findall(r'["\']([^"\']+)["\']', arr)
    for item in items:
        if len(item.strip()) > 3 and not item.startswith('/') and not item.startswith('#') and not item.startswith('var('):
            strings_to_check.append((item.strip(), 'Array Item'))

# Extract pure text nodes between > and <
tags_text = re.findall(r'>([^<{}>]+)<', page_clean, re.DOTALL)
for t in tags_text:
    clean_t = html.unescape(t.strip())
    if clean_t and len(clean_t) > 3 and not clean_t.startswith('import') and not clean_t.startswith('return') and not clean_t.startswith('const'):
        strings_to_check.append((clean_t, 'JSX Text Node'))

pass_count = 0
fail_count = 0
fails = []

for text, source in strings_to_check:
    n_text = norm(text)
    if n_text in norm_docx:
        pass_count += 1
    else:
        fail_count += 1
        fails.append((text, source))

print("="*70)
print(f"HARDWARE STRICT DOCX AUDIT RESULT:")
print(f"Total Text Elements Audited: {len(strings_to_check)}")
print(f"Passed (Matches DOCX 100%): {pass_count}")
print(f"Failed (Unauthorized): {fail_count}")
print("="*70)

if fail_count > 0:
    print("\nUNAUTHORIZED ITEMS FOUND:")
    for f_text, f_src in fails:
        print(f" - [{f_src}] \"{f_text[:100]}\"")
else:
    print("\nSUCCESS: 100% STRICT DOCX CONTENT COMPLIANT!")
