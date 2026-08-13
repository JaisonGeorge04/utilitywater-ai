import os
import re

with open('scratch_docx_dump.txt', 'r', encoding='utf-8') as f:
    docx = f.read()

images_dir = 'public/assets/docx-images'
img_files = os.listdir(images_dir) if os.path.exists(images_dir) else []

print("IMAGE FILES EXTRACTED FROM DOCX:")
for img in img_files:
    print(f" - {img}")

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

print("\nIMAGE USAGE ON WEBSITE:")
for p_name, p_path in pages:
    if os.path.exists(p_path):
        with open(p_path, 'r', encoding='utf-8') as f:
            code = f.read()
        imgs_in_code = re.findall(r'src=["\']([^"\']+)["\']', code)
        docx_imgs = [i for i in imgs_in_code if 'docx-images' in i]
        print(f"{p_name}: {len(docx_imgs)} DOCX images referenced -> {docx_imgs}")
