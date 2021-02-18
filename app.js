const reviews = [
    {
      id: 1,
      name: "Kane Williamson",
      job: "New Zealand Captain",
      img: "./kane-williamson.jpg",
      text:
        "Arguably New Zealand's finest batsman since the legendary Martin Crowe, Kane Williamson had been a wonder kid since his teenage days.His exceptional talent included the rare Non-Asian skill to play quality spin apart from being adept against fast bowling. It would be fair to say the Williamson family boasted of sports freak all around.",
     },

    {
      id: 2,
      name: "Joe Root",
      job: "England Test Captain",
      img:
        "./jr.jpg",
      text:
        "Joe Root, born on 30th December 1990, hails from a rich cricketing background. His grandfather captained Rotherham CC in the Yorkshire League for several seasons whilst his younger brother, Billy, is a regular with Glamorgan. In addition to being awarded a Daily Telegraph scholarship at the 2005 Bunbury festival, Root also attracted cricket scholarships at Workshop College.",
    },
    {
      id: 3,
      name: "Quinton De Kock",
      job: "South African Captain",
      img:
        "qdk.jpg",
      text:
        "Every once in a while, usually a very long while, there comes a player who manages to capture your imagination. Quinton de Kock is one such talent from South Africa. Some of the feats which he has accomplished at his age are unfathomable and it's easy to see why he is already being heralded as a future great. Not only is de Kock one heck of a batsman, but the value he brings to the side by donning the gloves is tremendous.",
    },
    {
      id: 4,
      name: "Virat Kohli",
      job: "Indian Captain",
      img:
        "vk.jpg",
      text:
        "A spunky, chubby teenager with gelled hair shot to fame after leading India to glory in the Under-19 World Cup at Kuala Lumpur in early 2008. In an Indian team filled with saint-like icons worthy of their own hagiographies, Virat Kohli, with his most un-Indian, 'bad-boy' intensity, would clearly be an outcast ",
    },
  ];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load initial item

window.addEventListener("DOMContentLoaded",function(){
    showPerson(currentItem);
});

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }

  // show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson();
  });


  // show prev person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson();
  });

randomBtn.addEventListener("click", function () {
    console.log("hello");
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });
