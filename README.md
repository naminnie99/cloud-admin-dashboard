<div align="center">
🌼 Cloud Admin Dashboard — CI/CD Automation Project

A student-built project demonstrating the CI/CD development process using automated build, testing workflows, artifact generation, and dashboard deployment simulation.

<br>

## 📸 Website Dashboard Screenshot
<img src="screenshots/1.png" width="800">

## 📸 GitHub Actions Success Run
<img src="screenshots/2.png" width="800">

<br> </div>
<div align="center">





</div>
📌 Overview

This project demonstrates the implementation of CI/CD practices using:

*Git for versioning
*GitHub Actions for workflow automation
*Node-based build scripts
*Automated testing (Jest + assert)
*Deployment simulation through build artifacts
*The dashboard pages visualize pipeline activity, usage, tables, widgets, and chart output.


🧩 Project Architecture

PROJECT/
│── public/               # Source pages
│── dist/                 # Automated build output
│── custom/               # JS functions to test
│── tests/                # Automated test scripts
│── .github/workflows/    # CI/CD workflows
│── package.json
│── README.md


🚀 Features Delivered

✔ Automated CI/CD pipelines
| Workflow       | Trigger | Output                              |
| -------------- | ------- | ----------------------------------- |
| Build Pipeline | On push | Creates artifact folder `dist/`     |
| Test Pipeline  | On push | Runs JS tests and publishes results |


✔ Dashboard Pages
| Page      | Description                         |
| --------- | ----------------------------------- |
| Dashboard | Shows build summaries               |
| Tables    | Demonstrates pagination & filtering |
| Widgets   | UI analytics widgets                |
| Charts    | Graph visualizations                |

✔ Custom JS Logic Used in Tests

Defined in /custom/main.js

function add(a,b){ return a + b; }
function getAppVersion(){ return "1.0.0"; }

module.exports = { add, getAppVersion };

Used in pipeline testing.

✔ Automated Unit Tests

File: /tests/sample.test.js

assert.strictEqual(add(2,3), 5);
assert.strictEqual(getAppVersion(), "1.0.0");

Terminal output upon success:

PASS  tests/sample.test.js
✓ add(2,3) should equal 5
✓ getAppVersion() should return 1.0.0


🛠 How to Run Locally
Install dependencies:
npm install

Run tests:
npm test

Build project:
npm run build

Open application:

Go to generated folder:

dist/dashboard/index.html

📦 Build Artifacts Produced

Each successful build produces downloadable artifacts containing:
dist/
│── dashboard/
│── table/
│── widget/
│── chart/
│── assets/

Meaning the system simulates real deployment packaging.

🔧 Key Technologies Used
| Category        | Technology                    |
| --------------- | ----------------------------- |
| Frontend        | HTML, CSS, Bootstrap Template |
| Automation      | GitHub Actions                |
| Build Tool      | Node.js (copyfiles)           |
| Testing         | Jest & Assert                 |
| Version Control | Git & GitHub                  |

🧪 Validation Steps Done

✔ All pages load successfully
✔ Sidebar linking works
✔ Console returns valid output:

add(2,3) → 5  
getAppVersion() → 1.0.0


✔ Build artifacts generated
✔ Test pipeline passed

👩‍🎓 Author

Developed by two students as part of a Cloud Computing Final Project:

Designed pipelines

Configured automated builds

Developed dashboard navigation

Implemented testing

🏁 Conclusion

This project successfully demonstrates full CI/CD implementation using:

Programming logic

Automated build pipelines

Automated test workflows

Final deployable artifact output

It follows real-world DevOps methodology and applies it on a working website.
