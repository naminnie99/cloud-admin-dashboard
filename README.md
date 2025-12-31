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


  DEPLOYMENT PIPELINE

A deployment pipeline is a sequence of automated steps that
moves application code from a version control system into a
production-ready environment.

In this project, GitHub Actions is used to automate the
deployment process, ensuring consistency, reliability, and
minimal manual intervention. The pipeline is triggered
automatically whenever code is pushed to the repository.

------------------------------------------------------------
 DEPLOYMENT PIPELINE SUMMARY
------------------------------------------------------------
| Stage        | Tool / Service   | Description                    |
|--------------|------------------|--------------------------------|
| Source Code  | GitHub           | Version control repository     |
| CI Trigger   | GitHub Actions   | Triggered on code push         |
| Build        | Node.js          | Generates static build files   |
| Artifact     | dist/ directory  | Deployment-ready output        |
| Deployment   | Amazon S3        | Static website hosting         |
| Delivery     | CloudFront CDN   | Global content distribution   |

------------------------------------------------------------
 DEPLOYMENT WORKFLOW DESCRIPTION
------------------------------------------------------------
1. Developer pushes updated source code to GitHub.
2. GitHub Actions automatically triggers the deployment
   workflow defined in deploy.yml.
3. The workflow retrieves build artifacts generated during
   the CI stage.
4. Static files (HTML, CSS, JavaScript) are uploaded to an
   Amazon S3 bucket.
5. Amazon CloudFront serves the content securely to users
   via a global CDN.

------------------------------------------------------------
 CLOUD DEPLOYMENT RATIONALE
------------------------------------------------------------
Cloud deployment is preferred over on-premise hosting due to
its scalability, high availability, and simplified system
management.

Amazon Web Services (AWS) enables seamless CI/CD integration
with GitHub Actions and supports automated deployment using a
pay-as-you-use pricing model.

Secure authentication between GitHub Actions and AWS is
handled using encrypted credentials stored in GitHub Secrets,
preventing accidental exposure of sensitive access keys.

------------------------------------------------------------
 FIGURE REFERENCE
------------------------------------------------------------
Fig.1: GitHub Actions deployment workflow (deploy.yml)



 -CLOUD INFRASTRUCTURE SETUP-


Amazon Web Services (AWS) is used to host and deliver the
static Cloud Admin Dashboard application. The infrastructure
is designed to be secure, scalable, and suitable for real-
world production deployment.

------------------------------------------------------------
 CLOUD INFRASTRUCTURE COMPONENTS
------------------------------------------------------------
| Component   | Purpose                              |
|-------------|--------------------------------------|
| Amazon S3   | Static website storage                |
| CloudFront  | Global CDN and secure content access  |
| IAM         | Identity and access management        |

------------------------------------------------------------
 INFRASTRUCTURE SETUP STEPS
------------------------------------------------------------
1. Create an Amazon S3 bucket with a globally unique name.
2. Enable static website hosting on the S3 bucket.
3. Set index.html as the default entry point.
4. Block public access to the S3 bucket.
5. Allow access only through CloudFront using
   Origin Access Control (OAC).

This configuration ensures that the S3 bucket cannot be
accessed directly from the internet.

------------------------------------------------------------
 FIGURE REFERENCE
------------------------------------------------------------
Fig.2: Amazon S3 bucket created for static hosting
Fig.3: Static website files uploaded to S3


SECURITY CONFIGURATION


Security is a critical component of the deployment pipeline.
This project follows the principle of least privilege to
minimize security risks during automated deployment.

------------------------------------------------------------
 SECURITY CONTROLS OVERVIEW
------------------------------------------------------------
| Security Control      | Implementation                     |
|----------------------|-------------------------------------|
| IAM User             | Dedicated CI/CD user                |
| Least Privilege      | Restricted S3 permissions           |
| Credential Storage   | GitHub Secrets (Encrypted)          |
| Public Access Control| S3 blocked, CloudFront allowed      |

------------------------------------------------------------
 SECURITY IMPLEMENTATION DETAILS
------------------------------------------------------------
1. A dedicated IAM user is created for GitHub Actions.
2. AWS root credentials are not used for deployment.
3. IAM permissions are limited to:
   - Upload objects
   - Read objects
   - List bucket contents
4. AWS access keys are stored securely using GitHub Secrets.

This approach prevents accidental credential exposure and
unauthorized access.

------------------------------------------------------------
 FIGURE REFERENCE
------------------------------------------------------------
Fig.6: IAM user created for GitHub Actions
Fig.7: IAM access keys generated
Fig.8: Encrypted GitHub Secrets configuration


DEPLOYMENT VERIFICATION AND TESTING


After deployment, verification is performed to ensure the
application is accessible, functional, and error-free.

------------------------------------------------------------
 DEPLOYMENT TEST CASES
------------------------------------------------------------
| Test Area     | Expected Result                     |
|---------------|-------------------------------------|
| Dashboard     | Loads without errors                |
| Tables Page  | Pagination and filtering work       |
| Widgets Page | Widgets render correctly            |
| Charts Page  | Charts display expected data        |
| Console Logs | No JavaScript errors                |

------------------------------------------------------------
 VERIFICATION METHODS
------------------------------------------------------------
1. Website accessed using CloudFront distribution URL.
2. Navigation between pages tested using sidebar links.
3. Browser developer tools used to inspect console output.
4. GitHub Actions logs reviewed for deployment success.

------------------------------------------------------------
 FIGURE REFERENCE
------------------------------------------------------------
Fig.9: Successful GitHub Actions deployment
Fig.10: Updated files visible in S3 bucket


CLOUD ARCHITECTURE


The cloud architecture defines the flow of code from
development to global content delivery.

------------------------------------------------------------
 CLOUD ARCHITECTURE FLOW
------------------------------------------------------------
| Step | Component        | Action                           |
|------|------------------|----------------------------------|
| 1    | Developer        | Pushes code to GitHub            |
| 2    | GitHub Actions   | Triggers CI/CD workflow          |
| 3    | GitHub Secrets   | Supplies AWS credentials         |
| 4    | Amazon S3        | Stores static website files      |
| 5    | CloudFront CDN   | Delivers content globally        |

------------------------------------------------------------
 ARCHITECTURE DESCRIPTION
------------------------------------------------------------
Static assets such as HTML, CSS, and JavaScript are deployed
to Amazon S3 and securely distributed to end users through
CloudFront CDN.

------------------------------------------------------------
 FIGURE REFERENCE
------------------------------------------------------------
Fig.11: Cloud Admin Dashboard architecture diagram


PROJECT OUTCOMES

The project successfully demonstrates a real-world CI/CD
pipeline with automated deployment and cloud hosting.

------------------------------------------------------------
 PROJECT OUTCOME SUMMARY
------------------------------------------------------------
| Area             | Outcome                              |
|------------------|--------------------------------------|
| CI/CD Automation | Fully automated workflows             |
| Deployment Speed | Faster release cycles                 |
| Error Reduction  | Minimal manual intervention           |
| Security         | IAM, Secrets, and CloudFront applied  |
| Scalability      | Global access via CDN                 |

------------------------------------------------------------
 FINAL OBSERVATION
------------------------------------------------------------
Issues such as access denial and caching were resolved using
correct S3 policies, CloudFront configuration, and cache
invalidation techniques.

The project follows industry best practices and represents a
secure, production-ready cloud deployment.
 
🙍Author

Developed by TWO students as part of a Cloud Computing Final Project:

1. Designed pipelines
2. Configured automated builds
3. Developed dashboard navigation
4. Implemented testing

🏁 Conclusion

This project successfully demonstrates full CI/CD implementation using:

1. Programming logic
2. Automated build pipelines
3. Automated test workflows
4. Final deployable artifact output
5. It follows real-world DevOps methodology and applies it on a working website.
