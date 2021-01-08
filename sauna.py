import os
import json
import pprint

os.system("node index.js >/dev/null")
with open('json.json') as f:
  data = json.load(f)

pprint.pprint(data)