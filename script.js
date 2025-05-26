let flashcards = [
    ["What are the 4 Ps of marketing?", "Product, Price, Place, Promotion"],
    ["What is a USP (Unique Selling Proposition)?", "A feature or benefit that makes a product unique and better than the competition."],
    ["What is a core product benefit?", "The basic value or problem-solving benefit that the customer is really buying."],
    ["What is an added product benefit?", "Extra features like warranty or packaging that go beyond the core benefit."],
    ["What is a hedonic product benefit?", "A benefit that provides sensory pleasure, like design or style."],
    ["What is a prestige benefit?", "A benefit that signals status or exclusivity, e.g., luxury branding."],
    ["What is incremental innovation?", "Small improvements to existing products."],
    ["What is radical innovation?", "Major breakthroughs that change markets or create new ones."],
    ["What is the SCAMPER method?", "A tool for ideation: Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, Reverse."],
    ["What are the stages of the innovation process?", "Idea generation, Screening, Concept, Feasibility, Product development, Testing, Launch."],
    ["What is market segmentation?", "Dividing a market into smaller segments with distinct needs or behaviors."],
    ["What is behavioral segmentation?", "Segmenting based on customer behavior like usage, loyalty, or benefits sought."],
    ["What is demographic segmentation?", "Segmenting based on age, gender, income, education, etc."],
    ["What is geographic segmentation?", "Segmenting based on location like region, city, or climate."],
    ["What is psychographic segmentation?", "Segmenting based on lifestyle, personality, or values."],
    ["What is a user persona?", "A fictional profile that represents an ideal customer segment."],
    ["What does TAM stand for?", "Total Available Market"],
    ["What does SAM stand for?", "Serviceable Available Market"],
    ["What does SOM stand for?", "Serviceable Obtainable Market"],
    ["What is price elasticity?", "The sensitivity of demand in response to price changes."],
    ["What is psychological pricing?", "Using prices like €9.99 to make the product appear cheaper."],
    ["What is the snob effect?", "People buy more as price increases to signal status."],
    ["What is the bulk effect?", "People buy more of a product when it's cheaper in larger quantities."],
    ["What is loss leader pricing?", "Selling below cost to attract customers who will buy other items."],
    ["What is freemium pricing?", "Offering a basic product for free with optional paid features."],
    ["What is indirect distribution?", "Using intermediaries like retailers or wholesalers to sell products."],
    ["What is direct distribution?", "Selling directly to customers without intermediaries."],
    ["What is distribution logistics?", "Planning transport, warehousing, and delivery to customers."],
    ["Why do perishable goods require special logistics?", "They need refrigeration and fast delivery to avoid spoilage."],
    ["What does outsourcing transport mean?", "Using third-party services like DHL instead of own vehicles."],
    ["What does the AIDA model stand for?", "Attention, Interest, Desire, Action"],
    ["What is paid media?", "Advertising you pay for, e.g., search ads or sponsored posts."],
    ["What is earned media?", "Unpaid publicity like word-of-mouth or media coverage."],
    ["What is owned media?", "Media you control like your website, blog, or social media."],
    ["What is the PESO model?", "Paid, Earned, Shared, and Owned media framework."],
    ["What is push marketing?", "Pushing product through ads to reach customers."],
    ["What is pull marketing?", "Creating demand so customers actively seek your product."],
    ["What is a communication channel?", "Medium used to deliver a message, e.g., TV, social media, email."],
    ["What is a shitstorm in marketing?", "Mass negative backlash online against a brand or campaign."],
    ["Why use influencer marketing?", "To leverage trusted individuals for more authentic reach."],
    ["How do you build authority in digital marketing?", "Publish quality content, partner with experts, be consistent."],
    ["What is digital storytelling?", "Using narrative techniques to engage audiences in digital channels."],
    ["What are the main goals of marketing?", "Attract, convert, and retain customers profitably."],
    ["What is B2B segmentation based on?", "Industry, company size, location, usage, or decision-making style."],
    ["What is B2C segmentation based on?", "Demographics, lifestyle, buying behavior, etc."],
    ["Why avoid general surveys for niche markets?", "They dilute results and miss the focused target group."],
    ["Why use heat maps in retail?", "To visualize where customers spend the most time."],
    ["How does price transparency affect businesses?", "It increases competition and makes price undercutting easier."],
    ["How can you reduce price comparability?", "Use bundles, unique models, added value, or subscriptions."],
    ["What is positioning in marketing?", "Creating a distinct place in the consumer's mind for your brand."],
    ["What is channel conflict?", "When two distribution partners compete or interfere with each other."],
    ["Why is consistency important in branding?", "It builds recognition, trust, and brand loyalty."],
    ["What is a product line extension?", "Adding new variations to an existing product range."],
    ["What does it mean to trade up?", "Introducing a more premium version of a product."],
    ["What does it mean to trade down?", "Introducing a more affordable version to reach new segments."]
];

// Shuffle flashcards
for (let i = flashcards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
}

let index = 0;
const card = document.getElementById("card");
const cardInner = document.getElementById("card-inner");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const counter = document.getElementById("counter");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function updateFlashcard() {
    question.textContent = flashcards[index][0];
    answer.textContent = flashcards[index][1];
    counter.textContent = `${index + 1} of ${flashcards.length}`;
    card.classList.remove("flipped");
}

card.addEventListener("click", () => {
    card.classList.toggle("flipped");
});

prevBtn.addEventListener("click", () => {
    if (index > 0) {
        index--;
        updateFlashcard();
    }
});

nextBtn.addEventListener("click", () => {
    if (index < flashcards.length - 1) {
        index++;
        updateFlashcard();
    }
});

updateFlashcard();