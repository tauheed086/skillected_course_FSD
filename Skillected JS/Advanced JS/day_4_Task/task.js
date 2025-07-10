var investors = [
  {
    "id": 1,
    "name": "Alice Morgan",
    "image": "https://randomuser.me/api/portraits/women/1.jpg",
    "design": "CEO",
    "companyLogo": "https://logo.clearbit.com/tesla.com"
  },
  {
    "id": 2,
    "name": "James Carter",
    "image": "https://randomuser.me/api/portraits/men/2.jpg",
    "design": "CTO",
    "companyLogo": "https://logo.clearbit.com/google.com"
  },
  {
    "id": 3,
    "name": "Sofia Lin",
    "image": "https://randomuser.me/api/portraits/women/3.jpg",
    "design": "Product Designer",
    "companyLogo": "https://logo.clearbit.com/apple.com"
  },
  {
    "id": 4,
    "name": "Liam Walker",
    "image": "https://randomuser.me/api/portraits/men/4.jpg",
    "design": "Marketing Head",
    "companyLogo": "https://logo.clearbit.com/netflix.com"
  },
  {
    "id": 5,
    "name": "Olivia Patel",
    "image": "https://randomuser.me/api/portraits/women/5.jpg",
    "design": "Creative Director",
    "companyLogo": "https://logo.clearbit.com/adobe.com"
  },
  {
    "id": 6,
    "name": "Noah Kim",
    "image": "https://randomuser.me/api/portraits/men/6.jpg",
    "design": "Software Engineer",
    "companyLogo": "https://logo.clearbit.com/github.com"
  },
  {
    "id": 7,
    "name": "Emma García",
    "image": "https://randomuser.me/api/portraits/women/7.jpg",
    "design": "UX Researcher",
    "companyLogo": "https://logo.clearbit.com/spotify.com"
  },
  {
    "id": 8,
    "name": "Ethan Zhang",
    "image": "https://randomuser.me/api/portraits/men/8.jpg",
    "design": "AI Scientist",
    "companyLogo": "https://logo.clearbit.com/openai.com"
  },
  {
    "id": 9,
    "name": "Ava Brown",
    "image": "https://randomuser.me/api/portraits/women/9.jpg",
    "design": "Operations Manager",
    "companyLogo": "https://logo.clearbit.com/amazon.com"
  },
  {
    "id": 10,
    "name": "Mason Nguyen",
    "image": "https://randomuser.me/api/portraits/men/10.jpg",
    "design": "Finance Director",
    "companyLogo": "https://logo.clearbit.com/paypal.com"
  },
  {
    "id": 11,
    "name": "Isabella Rossi",
    "image": "https://randomuser.me/api/portraits/women/11.jpg",
    "design": "Data Analyst",
    "companyLogo": "https://logo.clearbit.com/ibm.com"
  },
  {
    "id": 12,
    "name": "Logan Smith",
    "image": "https://randomuser.me/api/portraits/men/12.jpg",
    "design": "UI Engineer",
    "companyLogo": "https://logo.clearbit.com/microsoft.com"
  },
  {
    "id": 13,
    "name": "Mia Johnson",
    "image": "https://randomuser.me/api/portraits/women/13.jpg",
    "design": "Art Director",
    "companyLogo": "https://logo.clearbit.com/dribbble.com"
  },
  {
    "id": 14,
    "name": "Jacob Wilson",
    "image": "https://randomuser.me/api/portraits/men/14.jpg",
    "design": "Project Manager",
    "companyLogo": "https://logo.clearbit.com/slack.com"
  },
  {
    "id": 15,
    "name": "Amelia Thompson",
    "image": "https://randomuser.me/api/portraits/women/15.jpg",
    "design": "Lead Developer",
    "companyLogo": "https://logo.clearbit.com/bitbucket.org"
  },
  {
    "id": 16,
    "name": "William Martinez",
    "image": "https://randomuser.me/api/portraits/men/16.jpg",
    "design": "DevOps Engineer",
    "companyLogo": "https://logo.clearbit.com/docker.com"
  },
  {
    "id": 17,
    "name": "Charlotte Singh",
    "image": "https://randomuser.me/api/portraits/women/17.jpg",
    "design": "Content Strategist",
    "companyLogo": "https://logo.clearbit.com/medium.com"
  },
  {
    "id": 18,
    "name": "Benjamin Lee",
    "image": "https://randomuser.me/api/portraits/men/18.jpg",
    "design": "QA Lead",
    "companyLogo": "https://logo.clearbit.com/atlassian.com"
  },
  {
    "id": 19,
    "name": "Evelyn Clark",
    "image": "https://randomuser.me/api/portraits/women/19.jpg",
    "design": "Brand Manager",
    "companyLogo": "https://logo.clearbit.com/nike.com"
  },
  {
    "id": 20,
    "name": "Daniel Robinson",
    "image": "https://randomuser.me/api/portraits/men/20.jpg",
    "design": "Founder",
    "companyLogo": "https://logo.clearbit.com/startup.com"
  }
];

const container = document.getElementById("container");

investors.forEach(investors => {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = investors.image;
  img.alt = investors.name;
  img.className = "investors-img";

  const name = document.createElement("div");
  name.className = "investors-name";
  name.innerText = investors.name;

  const logo = document.createElement("img");
  logo.src = investors.companyLogo;
  logo.alt = "Company Logo";
  logo.className = "company-logo";

  const designation = document.createElement("div");
  designation.className = "designation";
  designation.innerText = investors.design;

  card.append(img, name, logo, designation);
  container.appendChild(card);
});
