// Load environment variables from .env file
import dotenv from 'dotenv';

dotenv.config();

// Import necessary modules
import fs from 'fs';
import inquirer from 'inquirer';

// Import the SharpApiService and other required classes from the package
import {
    SharpApiService,
    JobDescriptionParameters,
} from '@sharpapi/sharpapi-node-client';

// Load API key from environment variables
const apiKey = process.env.SHARP_API_KEY;

if (!apiKey) {
    throw new Error("API key not found. Please set SHARP_API_KEY in your .env file.");
}

// Initialize the SharpApiService
const sharpApi = new SharpApiService(apiKey);

// Function to generate a random string
function randomString(length = 8) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// Test functions for each API job
async function testPing() {
    console.log("\nTesting ping() method...");
    const pingResponse = await sharpApi.ping();
    console.log("Ping Response:", pingResponse);
    console.log("-".repeat(50));
}

async function testQuota() {
    console.log("\nTesting quota() method...");
    const quotaInfo = await sharpApi.quota();
    if (quotaInfo) {
        console.log("Quota Information:");
        console.log(quotaInfo);
    } else {
        console.log("Failed to retrieve quota information.");
    }
    console.log("-".repeat(50));
}

async function testParseResume() {
    console.log("\nTesting parseResume() method...");
    const resumeFilePath = 'sample_resume.pdf'; // Replace with your actual file path
    if (fs.existsSync(resumeFilePath)) {
        const statusUrl = await sharpApi.parseResume(resumeFilePath, 'English');
        const resultJob = await sharpApi.fetchResults(statusUrl);
        console.log("Parsed Resume Result:");
        console.log(resultJob.getResultJson());
    } else {
        console.warn(`Resume file '${resumeFilePath}' not found. Skipping parseResume test.`);
    }
    console.log("-".repeat(50));
}

async function testGenerateJobDescription() {
    console.log("\nTesting generateJobDescription() method...");
    const jobDescriptionParams = new JobDescriptionParameters(
        `Software Engineer ${randomString(5)}`,
        `Company ${randomString(8)}`,
        '6 years',
        'Bachelor degree',
        'full time',
        [
            "Develop software applications",
            "Collaborate with cross-functional teams",
            `Participate in ${randomString(6)} projects`
        ],
        [
            "Proficiency in JavaScript",
            "Experience with RESTful APIs",
            `Knowledge of ${randomString(7)}`
        ],
        'USA',
        true,
        true,
        'enthusiastic',
        'Category C driving license',
        'English'
    );
    const statusUrl1 = await sharpApi.generateJobDescription(jobDescriptionParams);
    const resultJob1 = await sharpApi.fetchResults(statusUrl1);
    console.log("Generated Job Description Result:");
    console.log(resultJob1.getResultJson());
    console.log("-".repeat(50));
}

async function testRelatedSkills() {
    console.log("\nTesting relatedSkills() method...");
    const skillName = `Programming`;
    const statusUrl2 = await sharpApi.relatedSkills(skillName, 'English', 5);
    const resultJob2 = await sharpApi.fetchResults(statusUrl2);
    console.log("Related Skills Result:");
    console.log(resultJob2.getResultJson());
    console.log("-".repeat(50));
}

async function testRelatedJobPositions() {
    console.log("\nTesting relatedJobPositions() method...");
    const jobPositionName = `Regional Sales Manager`;
    const statusUrl3 = await sharpApi.relatedJobPositions(jobPositionName, 'English', 5);
    const resultJob3 = await sharpApi.fetchResults(statusUrl3);
    console.log("Related Job Positions Result:");
    console.log(resultJob3.getResultJson());
    console.log("-".repeat(50));
}

async function testProductReviewSentiment() {
    console.log("\nTesting productReviewSentiment() method...");
    const review = `This product is ${Math.random() < 0.5 ? 'great' : 'terrible'}! ${randomString(10)}`;
    const statusUrl4 = await sharpApi.productReviewSentiment(review);
    const resultJob4 = await sharpApi.fetchResults(statusUrl4);
    console.log("Product Review Sentiment Result:");
    console.log(resultJob4.getResultJson());
    console.log("-".repeat(50));
}

async function testProductCategories() {
    console.log("\nTesting productCategories() method...");
    const productName = `Apple Watch v.${randomString(8)}`;
    const statusUrl5 = await sharpApi.productCategories(
        productName,
        'English',
        5,
        'Neutral',
        null
    );
    const resultJob5 = await sharpApi.fetchResults(statusUrl5);
    console.log("Product Categories Result:");
    console.log(resultJob5.getResultJson());
    console.log("-".repeat(50));
}

async function testGenerateProductIntro() {
    console.log("\nTesting generateProductIntro() method...");
    const productName = `Apple Watch v.${randomString(8)}`;
    const productData = `This is a new product called ${productName}. ${randomString(15)}`;
    const statusUrl6 = await sharpApi.generateProductIntro(
        productData,
        'English',
        100,
        'Friendly'
    );
    const resultJob6 = await sharpApi.fetchResults(statusUrl6);
    console.log("Generated Product Intro Result:");
    console.log(resultJob6.getResultJson());
    console.log("-".repeat(50));
}

async function testGenerateThankYouEmail() {
    console.log("\nTesting generateThankYouEmail() method...");
    const productName = `Apple Watch v.${randomString(8)}`;
    const statusUrl7 = await sharpApi.generateThankYouEmail(
        productName,
        'English',
        200,
        'Professional',
        null
    );
    const resultJob7 = await sharpApi.fetchResults(statusUrl7);
    console.log("Generated Thank You Email Result:");
    console.log(resultJob7.getResultJson());
    console.log("-".repeat(50));
}

async function testDetectPhones() {
    console.log("\nTesting detectPhones() method...");
    const textWithPhone = `Contact me at ${randomString(3)}-555-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')} for more information.`;
    const statusUrl8 = await sharpApi.detectPhones(textWithPhone);
    const resultJob8 = await sharpApi.fetchResults(statusUrl8);
    console.log("Detected Phones Result:");
    console.log(resultJob8.getResultJson());
    console.log("-".repeat(50));
}

async function testDetectEmails() {
    console.log("\nTesting detectEmails() method...");
    const textWithEmail = `Please send an email to test_${randomString(5)}@example.com.`;
    const statusUrl9 = await sharpApi.detectEmails(textWithEmail);
    const resultJob9 = await sharpApi.fetchResults(statusUrl9);
    console.log("Detected Emails Result:");
    console.log(resultJob9.getResultJson());
    console.log("-".repeat(50));
}

async function testDetectSpam() {
    console.log("\nTesting detectSpam() method...");
    const spamText = `Congratulations! You have won ${Math.floor(Math.random() * 5000 + 1000)} dollars! Click here to claim your prize.`;
    const statusUrl10 = await sharpApi.detectSpam(spamText);
    const resultJob10 = await sharpApi.fetchResults(statusUrl10);
    console.log("Spam Detection Result:");
    console.log(resultJob10.getResultJson());
    console.log("-".repeat(50));
}

async function testSummarizeText() {
    console.log("\nTesting summarizeText() method...");
    const longText = `This is a long text that needs to be summarized. ${randomString(50)} It contains multiple sentences and information.`;
    const statusUrl11 = await sharpApi.summarizeText(
        longText,
        'English',
        50,
        'Neutral',
        null
    );
    const resultJob11 = await sharpApi.fetchResults(statusUrl11);
    console.log("Summarized Text Result:");
    console.log(resultJob11.getResultJson());
    console.log("-".repeat(50));
}

async function testGenerateKeywords() {
    console.log("\nTesting generateKeywords() method...");
    const content = `This is some content about cars, toys, kids and ${randomString(10)} that needs keywords.`;
    const statusUrl12 = await sharpApi.generateKeywords(
        content,
        'English',
        5,
        'Neutral',
        null
    );
    const resultJob12 = await sharpApi.fetchResults(statusUrl12);
    console.log("Generated Keywords Result:");
    console.log(resultJob12.getResultJson());
    console.log("-".repeat(50));
}

async function testTranslate() {
    console.log("\nTesting translate() method...");
    const textToTranslate = `This is a text to translate. ${randomString(10)}`;
    const targetLanguage = 'Spanish';
    const statusUrl13 = await sharpApi.translate(
        textToTranslate,
        targetLanguage,
        'Neutral',
        null
    );
    const resultJob13 = await sharpApi.fetchResults(statusUrl13);
    console.log("Translated Text Result:");
    console.log(resultJob13.getResultJson());
    console.log("-".repeat(50));
}

async function testParaphrase() {
    console.log("\nTesting paraphrase() method...");
    const textToParaphrase = `This is a text that needs to be paraphrased. ${randomString(10)}`;
    const statusUrl14 = await sharpApi.paraphrase(
        textToParaphrase,
        'English',
        100,
        'Neutral',
        null
    );
    const resultJob14 = await sharpApi.fetchResults(statusUrl14);
    console.log("Paraphrased Text Result:");
    console.log(resultJob14.getResultJson());
    console.log("-".repeat(50));
}

async function testProofread() {
    console.log("\nTesting proofread() method...");
    const textToProofread = `This is a txt with erors that need to be corected. ${randomString(10)}`;
    const statusUrl15 = await sharpApi.proofread(textToProofread);
    const resultJob15 = await sharpApi.fetchResults(statusUrl15);
    console.log("Proofread Text Result:");
    console.log(resultJob15.getResultJson());
    console.log("-".repeat(50));
}

async function testGenerateSeoTags() {
    console.log("\nTesting generateSeoTags() method...");
    const contentForSeo = `This is content about ${randomString(8)} that needs SEO tags. Cars,toys.`;
    const statusUrl16 = await sharpApi.generateSeoTags(
        contentForSeo,
        'English',
        'Neutral'
    );
    const resultJob16 = await sharpApi.fetchResults(statusUrl16);
    console.log("Generated SEO Tags Result:");
    console.log(resultJob16.getResultJson());
    console.log("-".repeat(50));
}

async function testTravelReviewSentiment() {
    console.log("\nTesting travelReviewSentiment() method...");
    const travelReview = `The trip was ${Math.random() < 0.5 ? 'amazing' : 'disappointing'}. ${randomString(10)}`;
    const statusUrl17 = await sharpApi.travelReviewSentiment(travelReview);
    const resultJob17 = await sharpApi.fetchResults(statusUrl17);
    console.log("Travel Review Sentiment Result:");
    console.log(resultJob17.getResultJson());
    console.log("-".repeat(50));
}

async function testToursAndActivitiesProductCategories() {
    console.log("\nTesting toursAndActivitiesProductCategories() method...");
    const taProductName = `Tour, ${randomString(8)}`;
    const statusUrl18 = await sharpApi.toursAndActivitiesProductCategories(
        taProductName,
        'Paris',
        'France',
        'English',
        5,
        'Neutral',
        null
    );
    const resultJob18 = await sharpApi.fetchResults(statusUrl18);
    console.log("Tours and Activities Product Categories Result:");
    console.log(resultJob18.getResultJson());
    console.log("-".repeat(50));
}

async function testHospitalityProductCategories() {
    console.log("\nTesting hospitalityProductCategories() method...");
    const hospitalityProductName = `Hotel ${randomString(8)}`;
    const statusUrl19 = await sharpApi.hospitalityProductCategories(
        hospitalityProductName,
        'New York',
        'USA',
        'English',
        5,
        'Neutral',
        null
    );
    const resultJob19 = await sharpApi.fetchResults(statusUrl19);
    console.log("Hospitality Product Categories Result:");
    console.log(resultJob19.getResultJson());
    console.log("-".repeat(50));
}

// Mapping of test choices to functions
const testFunctions = {
    testPing,
    testQuota,
    testParseResume,
    testGenerateJobDescription,
    testRelatedSkills,
    testRelatedJobPositions,
    testProductReviewSentiment,
    testProductCategories,
    testGenerateProductIntro,
    testGenerateThankYouEmail,
    testDetectPhones,
    testDetectEmails,
    testDetectSpam,
    testSummarizeText,
    testGenerateKeywords,
    testTranslate,
    testParaphrase,
    testProofread,
    testGenerateSeoTags,
    testTravelReviewSentiment,
    testToursAndActivitiesProductCategories,
    testHospitalityProductCategories,
};

// Array of test choices
const testChoices = [
    {name: 'Ping Test', value: 'testPing'},
    {name: 'Quota Test', value: 'testQuota'},
    {name: 'Parse Resume Test', value: 'testParseResume'},
    {name: 'Generate Job Description Test', value: 'testGenerateJobDescription'},
    {name: 'Related Skills Test', value: 'testRelatedSkills'},
    {name: 'Related Job Positions Test', value: 'testRelatedJobPositions'},
    {name: 'Product Review Sentiment Test', value: 'testProductReviewSentiment'},
    {name: 'Product Categories Test', value: 'testProductCategories'},
    {name: 'Generate Product Intro Test', value: 'testGenerateProductIntro'},
    {name: 'Generate Thank You Email Test', value: 'testGenerateThankYouEmail'},
    {name: 'Detect Phones Test', value: 'testDetectPhones'},
    {name: 'Detect Emails Test', value: 'testDetectEmails'},
    {name: 'Detect Spam Test', value: 'testDetectSpam'},
    {name: 'Summarize Text Test', value: 'testSummarizeText'},
    {name: 'Generate Keywords Test', value: 'testGenerateKeywords'},
    {name: 'Translate Text Test', value: 'testTranslate'},
    {name: 'Paraphrase Text Test', value: 'testParaphrase'},
    {name: 'Proofread Text Test', value: 'testProofread'},
    {name: 'Generate SEO Tags Test', value: 'testGenerateSeoTags'},
    {name: 'Travel Review Sentiment Test', value: 'testTravelReviewSentiment'},
    {name: 'Tours and Activities Product Categories Test', value: 'testToursAndActivitiesProductCategories'},
    {name: 'Hospitality Product Categories Test', value: 'testHospitalityProductCategories'},
    {name: 'Run All Tests', value: 'runAllTests'},
    {name: 'Exit', value: 'exit'},
];

// Main function to prompt user and execute selected test
async function main() {
    while (true) {
        const {testChoice} = await inquirer.prompt([
            {
                type: 'list',
                pageSize: 24,
                name: 'testChoice',
                message: 'Which API job test would you like to run?',
                choices: testChoices,
            },
        ]);

        if (testChoice === 'exit') {
            console.log("Exiting the application. Goodbye!");
            process.exit(0);
        }

        try {
            if (testChoice === 'runAllTests') {
                for (const func of Object.values(testFunctions)) {
                    await func();
                }
            } else if (testFunctions[testChoice]) {
                await testFunctions[testChoice]();
            } else {
                console.log('Invalid choice.');
            }
        } catch (error) {
            console.error("An error occurred:");
            console.error(error);
        }

        const {continueChoice} = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'continueChoice',
                message: 'Would you like to run another test?',
                default: false,
            },
        ]);

        if (!continueChoice) {
            console.log("Exiting the application. Goodbye!");
            process.exit(0);
        }
    }
}

main();
