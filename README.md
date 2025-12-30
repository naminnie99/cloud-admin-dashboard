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

============================================================
 DEPLOYMENT PIPELINE
============================================================

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
| Delivery     | CloudFront CDN   | Global content distribution    |

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
 * Fig.1: GitHub Actions deployment workflow (deploy.yml)
 */



 * ============================================================
 *  CLOUD INFRASTRUCTURE SETUP
 * ============================================================
 *
 * Amazon S3 is used as the primary service for hosting static
 * website content.
 *
 * ------------------------------------------------------------
 * CLOUD INFRASTRUCTURE COMPONENTS
 * ------------------------------------------------------------
 * | Component   | Purpose                              |
 * |-------------|--------------------------------------|
 * | Amazon S3   | Static website storage                |
 * | CloudFront  | Global CDN and secure access          |
 * | IAM         | Access and identity management        |
 
 * ------------------------------------------------------------
 
 * Infrastructure Setup Steps:
 * 1. Create an S3 bucket with a globally unique name
 * 2. Enable static website hosting
 * 3. Set index.html as entry point
 * 4. Block public access to S3 bucket
 * 5. Allow access only via CloudFront (OAC)
 *
 * This ensures the S3 bucket cannot be accessed directly.
 *
 * Fig.2: S3 bucket "cloud-admin-dashboard" created
 * Fig.3: Objects uploaded for static website hosting
 */



 * ============================================================
   SECURITY CONFIGURATION
 * ============================================================
 *
 * Security is a critical part of this deployment.
 *
 * A dedicated IAM user is created for GitHub Actions to avoid
 * using the AWS root account.
 *
 * ------------------------------------------------------------
 * SECURITY CONTROLS OVERVIEW
 * ------------------------------------------------------------
 * | Security Control      | Implementation                     |
 * |-----------------------|-------------------------------------|
 * | IAM User              | Dedicated CI/CD user                |
 * | Least Privilege       | Restricted S3 permissions           |
 * | Credential Storage    | GitHub Secrets (Encrypted)          |
 * | Public Access Control | S3 blocked, CloudFront allowed      |
 *
 * ------------------------------------------------------------
 *
 * IAM permissions are limited to:
 * - Upload objects
 * - Read objects
 * - List bucket contents
 *
 * AWS access keys are encrypted using GitHub Secrets to prevent
 * accidental exposure in logs or source code.
 *
 * Fig.6: IAM user for GitHub Actions
 * Fig.7: IAM access keys provisioned
 * Fig.8: Encrypted secrets in GitHub
 */



 * ============================================================
   DEPLOYMENT VERIFICATION AND TESTING
 * ============================================================
 *
 * After deployment, the website is tested using the CloudFront
 * URL to ensure availability and correctness.
 *
 * ------------------------------------------------------------
 * DEPLOYMENT TEST CASES
 * ------------------------------------------------------------
 * | Test Area     | Expected Result                     |
 * |---------------|-------------------------------------|
 * | Dashboard     | Loads without errors                |
 * | Tables Page   | Pagination and filtering works      |
 * | Widgets Page  | Widgets render correctly            |
 * | Charts Page   | Charts display expected data        |
 * | Console Logs  | No JavaScript errors                |
 *
 * ------------------------------------------------------------
 *
 * GitHub Actions confirms successful deployment execution.
 *
 * Browser developer tools are used to verify script execution.
 *
 * Fig.9: Successful GitHub Actions deployment
 * Fig.10: S3 bucket updated after deployment
 

 * ============================================================
   CLOUD ARCHITECTURE
 * ============================================================
 *
 * ------------------------------------------------------------
 * CLOUD ARCHITECTURE FLOW
 * ------------------------------------------------------------
 * | Step | Component        | Action                           |
 * |------|------------------|----------------------------------|
 * | 1    | Developer        | Pushes code to GitHub            |
 * | 2    | GitHub Actions   | Triggers CI/CD workflow          |
 * | 3    | GitHub Secrets   | Provides AWS credentials         |
 * | 4    | Amazon S3        | Stores static website files      |
 * | 5    | CloudFront       | Serves content globally          |
 *
 * ------------------------------------------------------------
 *
 * Static assets (HTML, CSS, JS) are deployed to S3 and served
 * securely via CloudFront CDN.
 *
 * Fig.11: Cloud Admin Dashboard Architecture

 * PROJECT OUTCOMES
 * ------------------------------------------------------------
 * | Area              | Outcome                              |
 * |-------------------|--------------------------------------|
 * | CI/CD Automation  | Fully automated                      |
 * | Deployment Speed  | Faster release cycles                |
 * | Error Reduction   | Minimal manual intervention          |
 * | Security          | IAM + Secrets + CloudFront           |
 * | Scalability       | Global access via CDN                |
 *
 * ------------------------------------------------------------
 
 * Issues such as access denial and caching were resolved using
 * correct S3 policies, CloudFront configuration, and cache
 * invalidation techniques.
 
 * The project represents a secure and production-ready cloud
 * deployment following industry best practices.
 
🙍Author

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
