const portfolio = Object.values(
  import.meta.glob("@assets/portfolio/*.{png,jpg,jpeg,PNG,JPEG}", {
    eager: true,
    as: "url",
  })
);

type Testimonial = {
  name: string;
  date: Date;
  messages: string[];
};

function createId(testimonial: Testimonial) {
  return `${testimonial.name}-${testimonial.date.toISOString()}-testimonial`;
}

function byDateDesc(lhs: Testimonial, rhs: Testimonial) {
  return rhs.date.getTime() - lhs.date.getTime();
}

const isBeta = import.meta.env.MODE;

console.log(isBeta);

if (import.meta.env.MODE === "development") {
  const element = document.createElement("div");
  element.className = "card font-body-small";
  element.style.position = "fixed";
  element.style.bottom = "0";
  element.style.left = "0";
  element.style.right = "0";
  element.textContent = "This is a beta site, none of the offers are binding";
  document.body.appendChild(element);
}

const testimonials: Testimonial[] = [
  {
    name: "Hawa",
    date: new Date("2024-10-25"),
    messages: [
      "Livia has been a Life saver. It Is so hard to find someone that knows how to take care of african hair type and properly do make up for dark skins.",
      "She was caring, professional, always open to answer my questions and listen to my ideas. She even helped me with my wedding dress.",
      "I reccomend her 100% .",
      "Her make up and hairstyle lasted all day long and they were gorgeous; I got compliments from everyone.",
      "Livia thank you from the bottom of my heart for being part of my special day and for making It even more special.",
    ],
  },
  {
    name: "Celina",
    date: new Date("2024-10-26"),
    messages: [
      "Hello Lívia, good morning",
      "Thank you for yesterday! Your work was wonderful 🥹❤️ You are a great artist with incredible talent!!! Thank you for taking care of all the details!!!",
    ],
  },
  {
    name: "Sam",
    date: new Date("2024-10-15"),
    messages: [
      "Thank you so much for being both professional and easy to talk to. You made everything so simple and I always felt that you had the experience and therefore everything in control of the timings etc of the day. So that was very reassuring knowing I would be ready in time ☺️ Fantastic that you can do both hair and makeup so well, makes it easy to just have one person for everything and you did everything as I wanted and listened to my preferences. I felt very relaxed in your company and would recommend to anyone having a wedding or elopement in Copenhagen! Thanks again for the time you took to make sure everything was right. The makeup lasted until night aswell and didn’t need to retouch! 😌",
    ],
  },
  {
    name: "Nicoline",
    date: new Date("2024-10-12"),
    messages: [
      "Hello beautiful 🥰 I'm sorry it took me this long! I will forever be gratefull for the care and service you provided! You made the beginning of my day so calm and stress free, and you managed to make us all look abseloutly stunning! ",
      "If anyone ever needs a stylist, I will ALWAYS recommed you ❤️❤️",
    ],
  },
  {
    name: "Maria",
    date: new Date("2024-07-20"),
    messages: [
      "Hallo Livia! 🥰",
      "Thank you again for the beautifully hair and make-up you did on our wedding day yesterday! ",
      "I got a lot of compliments from all the guests. And I truly loved it and I felt so pretty as a woman can feel👏🏼",
      "Thank you so much 🙏🏼😍🥰",
      "The make-up lasted long not touched by the hot sun or many tears 🥲🥰🥰",
    ],
  },
  {
    name: "Nathalia",
    date: new Date("2024-04-04"),
    messages: [
      "Hi Livia, I wanted to stop by to leave my feedback on your work, I simply loved it, I couldn't have chosen better, I left my wedding and even took advantage of the makeup to go out at night, congratulations on the work, on the punctuality, for the good conversation, anyway, I loved it and I will recommend it to friends who are getting married in Denmark 🫶🏻",
    ],
  },
  {
    name: "Yessica",
    date: new Date("2024-08-23"),
    messages: [
      "Mi querida Livia ♥️",
      "Thank you so much for making my wedding day so magical, the makeup and the hair was so amazing and I felt so beautiful. The makeup and the hair lasted all day and all night. You are amazing and so talented, and you have the biggest heart 🙏🏽♥️ The entire experience was so good, you also did catch me when I came with last minutes changes after the trail, and you just calmed me down and helped me with the new ideas you are so easy to talk and work with and I’m grateful to have known and had this wonderful experience with you. 🙏🏽",
      "Thank you for giving my daughters the best experience ever with the beautiful makeup you did on them. ♥️♥️",
    ],
  },
  {
    name: "Ana",
    date: new Date("2024-08-21"),
    messages: [
      "Choosing Livia as my makeup artist and stylist for my wedding was truly amazing. She helped me calm my nerves and insecurities, as well as doing my makeup amazingly!!! Thank you Livia for being part of a very magical and intimate moment for me and David. We love you so much and let's keep in touch, you are an incredible professional and person.",
    ],
  },
  {
    name: "Maoko",
    date: new Date("2024-05-18"),
    messages: [
      "Thank you so so much for your amazing help with makeup&hair 🥹🤍 I also enjoyed the company in the morning and hair & makeup stayed as it should be for whole night 🤍",
    ],
  },
  {
    name: "Mahdieh",
    date: new Date("2024-06-29"),
    messages: [
      "Hi Livia, Thank you for yesterday. You have a contagious smile that made me happy and energetic, although I did not sleep very well the night before. I got so many compliments during our magical day 😊 My hair stayed the same til 3 in the morning 😊",
      "Thank you 🤗🤗",
    ],
  },
  {
    name: "Birgitte",
    date: new Date("2024-06-01"),
    messages: [
      "Hi Lívia, Thank you så much for your help on my special day. I was so pleased with your work:) We had a wonderful day and everything went perfect. Just like we had imagined 😃",
    ],
  },
  {
    name: "Lourdes",
    date: new Date("2024-05-16"),
    messages: [
      "Hi Livia, I just wanted to say that working with you was an amazing experience. I really enjoyed to have a chat with you while doing my makeup and hair, you make the environment such a relaxing place and I felt really comfortable and excited about the whole process. I can't wait to see you for my first wedding anniversary 🥰",
    ],
  },
  {
    name: "Ale",
    date: new Date("2024-08-20"),
    messages: [
      "Livia, thank you so much for everything, your job was amazing. I was really happy with my hairstyle and my makeup it was exactly what I wanted!! You were so professional and kind! 🥰✨ definitely I’ll recommend your work to my friends 🫶🏼",
    ],
  },
  {
    name: "Michaela",
    date: new Date("2024-08-09"),
    messages: [
      "I thought the experience was great from start to finish. The price is very cheap, I think. You’re easy to get ahold of and it was very easy to set up times and dates with you. The trial really gave me a lot og confidence in your work. The way you would stop and explain things, ask questions etc made me feel part pf the process and like I had full control of the situation. What I really appreciated is how you were able to interpret my wishes and make them into reality. It was especially insane, considering that I didn’t necessarily know what I wanted 🤣",
      "I was very happy with the trial, and didn’t really expect things to be different on the actual wedding day. But somehow you made the experience even better. You knew how to handle a stressed bride, you were quick and effective and the finished result was so, so good. But above all else, I really enjoyed how approachable and easy to talk to you were. It made it feel like I had a friend helping me out ☺️",
    ],
  },
].sort(byDateDesc);

document.querySelector<Element>("#testimonials-content")!.innerHTML = `
  ${testimonials
    .slice(0, 8)
    .map(
      (testimonial) => `
        <blockquote class="testimonial" style="margin:0">
          ${testimonial.messages
            .map((message) => `<p class="message from">${message}</p>`)
            .join("")}
          <cite>
            ${testimonial.name} &mdash; 
            <time datetime="${testimonial.date.toISOString().slice(0, 10)}">
              ${testimonial.date.toDateString()}
            </time>
          </cite>
        </blockquote>
        <input 
          id="${createId(testimonial)}" 
          type="radio" 
          name="testimonial" 
          ${testimonials.indexOf(testimonial) == 0 ? "checked" : ""}
        />
        <label 
          style="color: transparent; pointer-events:none; width: 1px" 
          for="${createId(testimonial)}"
        >
          ${testimonial.name}
        </label>
      `
    )
    .join("")}
`;

document.querySelector<Element>("#portfolio-content")!.innerHTML = `
    ${portfolio
      .map(
        (image) => `<img
      src="${image}"
      alt=""
    />`
      )
      .join("")}
`;
