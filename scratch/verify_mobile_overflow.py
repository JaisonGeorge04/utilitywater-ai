import asyncio
import urllib.request
import re

# Let's inspect the pages by fetching HTML and checking for potential fixed-width inline styles or classes
routes = [
    '/',
    '/ai-functions-water-treatment-distribution',
    '/iot-software-water-treatment-distribution',
    '/ai-iot-hardware-water-treatment-operations',
    '/integration-water-treatment-distribution',
    '/applications-water-treatment-distribution',
    '/resources',
    '/about',
    '/contact'
]

print("Checking inline style max-widths / min-widths in page source files...")

import glob

fixed_width_found = []
for p in glob.glob('src/pages/*.jsx'):
    with open(p, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check for hardcoded width in px greater than 300px without max-width protection
    matches = re.findall(r'width:\s*[\'"](\d{3,})px[\'"]', content)
    for m in matches:
        if int(m) > 300:
            fixed_width_found.append((p, m))

print(f"Fixed px width matches > 300px: {fixed_width_found}")
