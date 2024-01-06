function textToDataURI(textContent) {
  var base64Content = btoa(textContent);
  var dataURI = "data:text/html;base64," + base64Content;
  return dataURI;
}

const apps = [
  {
    name: "About project",
    icon: "https://i.postimg.cc/gJZBVzDm/download.jpg",
    content: `
    <div class="UniqueID154865729body">
    <style>
        .UniqueID154865729body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            background-color: #151515;
            color: #fff;
            width: 100%;
            height: max-content;
            min-height: 100%;
            padding-bottom: 16px;
            padding-top: 8px;
            margin: 0px;
            display: block;
        }

        .UniqueID458621937time {
            font-weight: bold;
        }
        .UniqueID758424889title{
            margin-top: 0px;
        }
        .UniqueID358943927p{
            margin-bottom: 0px;
        }
    </style>
    <h1 class="UniqueID758424889title">Updates and notices board</h1>
    <time class="UniqueID458621937time" datetime="2024-01-04">4th of January</time>
    <p class="UniqueID358943927p">Hello, fellow internet stranger!
        This project is my "webOS" (not the one from LG tho) It's basically trying to mimic a real operating system
        like
        Windows or MacOS on the web. As you may notice, currently there are not a lot of apps and games to mess
        around
        with. I'm working on a few, so maybe soon there will be more, but if you would like to join our Discord
        server,
        where you will find instructions on how to make the apps and how to "upload them to the OS," By upload, I
        meant
        to say send it over to me and wait for me to push a new update of the app library. You can also join the
        Discord
        server to ask questions and check on updates. That's all from me for now, so bye bye ;)</p>
</div>
    `,
  },{
    name: "101 jokes",
    icon: "https://tse4.mm.bing.net/th?id=OIP.20LuXO_ERm0c7M2Pgb1wUwHaFS&pid=Api",
    content: `
    <div class="UniqueID154865729body">
    <style>
        .UniqueID154865729body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            background-color: #151515;
            color: #fff;
            width: 100%;
            height: max-content;
            min-height: 100%;
            padding-bottom: 16px;
            padding-top: 8px;
            margin: 0px;
            display: block;
        }

        .UniqueID758424889title {
            margin-top: 0px;
        }

        .UniqueID358943927p {
            margin-bottom: 0px;
        }
    </style>
    <h1 class="UniqueID758424889title">101 jokes to make you frineds laugh</h1>
    <p class="UniqueID563218974p">lol this app is mainly for testing purpouses but i mean you can use theese or
        something idk</p>
    <p class="UniqueID563218974p">creds to <a target="_blank" href="https://github.com/15Dkatz/official_joke_api">15Dkatz for the jokes</a></p>
    <br>
    <p class="UniqueID563218974p">What biscuit does a short person like?</p>
    <p class="UniqueID563218974p">Shortbread. </p>
    <br>
    <p class="UniqueID563218974p">What did the Java code say to the C code?</p>
    <p class="UniqueID563218974p">You've got no class.</p>
    <br>
    <p class="UniqueID563218974p">What time did the man go to the dentist?</p>
    <p class="UniqueID563218974p">Tooth hurt-y.</p>
    <br>
    <p class="UniqueID563218974p">How do locomotives know where they're going?</p>
    <p class="UniqueID563218974p">Lots of training</p>
    <br>
    <p class="UniqueID563218974p">How many lips does a flower have?</p>
    <p class="UniqueID563218974p">Tulips</p>
    <br>
    <p class="UniqueID563218974p">Which side of the chicken has more feathers?</p>
    <p class="UniqueID563218974p">The outside.</p>
    <br>
    <p class="UniqueID563218974p">Why did the opera singer go sailing?</p>
    <p class="UniqueID563218974p">They wanted to hit the high Cs.</p>
    <br>
    <p class="UniqueID563218974p">When a dad drives past a graveyard: Did you know that's a popular cemetery?</p>
    <p class="UniqueID563218974p">Yep, people are just dying to get in there</p>
    <br>
    <p class="UniqueID563218974p">Why do bees have sticky hair?</p>
    <p class="UniqueID563218974p">Because they use honey combs!</p>
    <br>
    <p class="UniqueID563218974p">If you see a robbery at an Apple Store...</p>
    <p class="UniqueID563218974p">Does that make you an iWitness?</p>
    <br>
    <p class="UniqueID563218974p">Who is the coolest Doctor in the hospital?</p>
    <p class="UniqueID563218974p">The hip Doctor!</p>
    <br>
    <p class="UniqueID563218974p">Why do programmers always mix up Halloween and Christmas?</p>
    <p class="UniqueID563218974p">Because Oct 31 == Dec 25</p>
    <br>
    <p class="UniqueID563218974p">How do you tell the difference between a crocodile and an alligator?</p>
    <p class="UniqueID563218974p">You will see one later and one in a while.</p>
    <br>
    <p class="UniqueID563218974p">I bought some shoes from a drug dealer.</p>
    <p class="UniqueID563218974p">I don't know what he laced them with, but I was tripping all day!</p>
    <br>
    <p class="UniqueID563218974p">What did the left eye say to the right eye?</p>
    <p class="UniqueID563218974p">Between us, something smells!</p>
    <br>
    <p class="UniqueID563218974p">What's the difference between a seal and a sea lion?</p>
    <p class="UniqueID563218974p">An ion! </p>
    <br>
    <p class="UniqueID563218974p">Two guys walk into a bar . . .</p>
    <p class="UniqueID563218974p">The first guy says "Ouch!" and the second says "Yeah, I didn't see it either."</p>
    <br>
    <p class="UniqueID563218974p">What did one wall say to the other wall?</p>
    <p class="UniqueID563218974p">I'll meet you at the corner!</p>
    <br>
    <p class="UniqueID563218974p">What is the least spoken language in the world?</p>
    <p class="UniqueID563218974p">Sign Language</p>
    <br>
    <p class="UniqueID563218974p">What did the fish say when it swam into a wall?</p>
    <p class="UniqueID563218974p">Damn!</p>
    <br>
    <p class="UniqueID563218974p">What's black and white and read all over?</p>
    <p class="UniqueID563218974p">The newspaper.</p>
    <br>
    <p class="UniqueID563218974p">Did you know that protons have mass?</p>
    <p class="UniqueID563218974p">I didn't even know they were catholic.</p>
    <br>
    <p class="UniqueID563218974p">Have you heard the rumor going around about butter?</p>
    <p class="UniqueID563218974p">Never mind, I shouldn't spread it.</p>
    <br>
    <p class="UniqueID563218974p">How do the trees get on the internet?</p>
    <p class="UniqueID563218974p">They log on.</p>
    <br>
    <p class="UniqueID563218974p">What kind of music do planets listen to?</p>
    <p class="UniqueID563218974p">Nep-tunes.</p>
    <br>
    <p class="UniqueID563218974p">What time did the man go to the dentist?</p>
    <p class="UniqueID563218974p">Tooth hurt-y.</p>
    <br>
    <p class="UniqueID563218974p">99.9% of the people are dumb!</p>
    <p class="UniqueID563218974p">Fortunately I belong to the remaining 1%</p>
    <br>
    <p class="UniqueID563218974p">What do you call a cow on a trampoline?</p>
    <p class="UniqueID563218974p">A milk shake!</p>
    <br>
    <p class="UniqueID563218974p">What do vegetarian zombies eat?</p>
    <p class="UniqueID563218974p">Grrrrrainnnnnssss.</p>
    <br>
    <p class="UniqueID563218974p">Why couldn't the kid see the pirate movie?</p>
    <p class="UniqueID563218974p">Because it was rated arrr!</p>
    <br>
    <p class="UniqueID563218974p">How many optometrists does it take to change a light bulb?</p>
    <p class="UniqueID563218974p">1 or 2? 1... or 2?</p>
    <br>
    <p class="UniqueID563218974p">What do you call a careful wolf?</p>
    <p class="UniqueID563218974p">Aware wolf.</p>
    <br>
    <p class="UniqueID563218974p">Want to hear a chimney joke?</p>
    <p class="UniqueID563218974p">Got stacks of em! First one's on the house</p>
    <br>
    <p class="UniqueID563218974p">What's the worst part about being a cross-eyed teacher?</p>
    <p class="UniqueID563218974p">They can't control their pupils.</p>
    <br>
    <p class="UniqueID563218974p">If you put a million monkeys at a million keyboards, one of them will eventually write a Java program</p>
    <p class="UniqueID563218974p">the rest of them will write Perl</p>
    <br>
    <p class="UniqueID563218974p">What do prisoners use to call each other?</p>
    <p class="UniqueID563218974p">Cell phones.</p>
    <br>
    <p class="UniqueID563218974p">What kind of tree fits in your hand?</p>
    <p class="UniqueID563218974p">A palm tree!</p>
    <br>
    <p class="UniqueID563218974p">Who did the wizard marry?</p>
    <p class="UniqueID563218974p">His ghoul-friend</p>
    <br>
    <p class="UniqueID563218974p">Want to hear a joke about a piece of paper?</p>
    <p class="UniqueID563218974p">Never mind...it's tearable</p>
    <br>
    <p class="UniqueID563218974p">Well...</p>
    <p class="UniqueID563218974p">That’s a deep subject.</p>
    <br>
    <p class="UniqueID563218974p">What animal is always at a game of cricket?</p>
    <p class="UniqueID563218974p">A bat.</p>
    <br>
    <p class="UniqueID563218974p">What do you call someone with no nose?</p>
    <p class="UniqueID563218974p">Nobody knows.</p>
    <br>
    <p class="UniqueID563218974p">How do you steal a coat?</p>
    <p class="UniqueID563218974p">You jacket.</p>
    <br>
    <p class="UniqueID563218974p">Why don't eggs tell jokes?</p>
    <p class="UniqueID563218974p">Because they would crack each other up.</p>
    <br>
    <p class="UniqueID563218974p">Where do programmers like to hangout?</p>
    <p class="UniqueID563218974p">The Foo Bar.</p>
    <br>
    <p class="UniqueID563218974p">What kind of award did the dentist receive?</p>
    <p class="UniqueID563218974p">A little plaque.</p>
    <br>
    <p class="UniqueID563218974p">A DHCP packet walks into a bar and asks for a beer.</p>
    <p class="UniqueID563218974p">Bartender says, "here, but I’ll need that back in an hour!"</p>
    <br>
    <p class="UniqueID563218974p">Why can't bicycles stand on their own?</p>
    <p class="UniqueID563218974p">They are two tired</p>
    <br>
    <p class="UniqueID563218974p">How do locomotives know where they're going?</p>
    <p class="UniqueID563218974p">Lots of training</p>
    <br>
    <p class="UniqueID563218974p">Where do sheep go to get their hair cut?</p>
    <p class="UniqueID563218974p">The baa-baa shop.</p>
    <br>
    <p class="UniqueID563218974p">What's the worst part about being a cross-eyed teacher?</p>
    <p class="UniqueID563218974p">They can't control their pupils.</p>
    <br>
    <p class="UniqueID563218974p">Why do birds fly south for the winter?</p>
    <p class="UniqueID563218974p">Because it's too far to walk.</p>
    <br>
    <p class="UniqueID563218974p">How do the trees get on the internet?</p>
    <p class="UniqueID563218974p">They log on.</p>
    <br>
    <p class="UniqueID563218974p">What do you call a cow with no legs?</p>
    <p class="UniqueID563218974p">Ground beef!</p>
    <br>
    <p class="UniqueID563218974p">Who did the wizard marry?</p>
    <p class="UniqueID563218974p">His ghoul-friend</p>
    <br>
    <p class="UniqueID563218974p">Why did the invisible man turn down the job offer?</p>
    <p class="UniqueID563218974p">He couldn't see himself doing it</p>
    <br>
    <p class="UniqueID563218974p">What do you call a fake noodle?</p>
    <p class="UniqueID563218974p">An impasta.</p>
    <br>
    <p class="UniqueID563218974p">Why does Norway have barcodes on their battleships?</p>
    <p class="UniqueID563218974p">So when they get back to port, they can Scandinavian.</p>
    <br>
    <p class="UniqueID563218974p">Why didn’t the skeleton cross the road?</p>
    <p class="UniqueID563218974p">Because he had no guts.</p>
    <br>
    <p class="UniqueID563218974p">What do you call a bee that can't make up its mind?</p>
    <p class="UniqueID563218974p">A maybe.</p>
    <br>
    <p class="UniqueID563218974p">Where do sheep go to get their hair cut?</p>
    <p class="UniqueID563218974p">The baa-baa shop.</p>
    <br>
    <p class="UniqueID563218974p">Have you heard of the band 1023MB?</p>
    <p class="UniqueID563218974p">They haven't got a gig yet.</p>
    <br>
    <p class="UniqueID563218974p">What do you do when you see a space man?</p>
    <p class="UniqueID563218974p">Park your car, man.</p>
    <br>
    <p class="UniqueID563218974p">Why do bananas have to put on sunscreen before they go to the beach?</p>
    <p class="UniqueID563218974p">Because they might peel!</p>
    <br>
    <p class="UniqueID563218974p">Why does Superman get invited to dinners?</p>
    <p class="UniqueID563218974p">Because he is a Supperhero.</p>
    <br>
    <p class="UniqueID563218974p">What do you call a dad that has fallen through the ice?</p>
    <p class="UniqueID563218974p">A Popsicle.</p>
    <br>
    <p class="UniqueID563218974p">What's the best thing about elevator jokes?</p>
    <p class="UniqueID563218974p">They work on so many levels.</p>
    <br>
    <p class="UniqueID563218974p">Why did the scarecrow win an award?</p>
    <p class="UniqueID563218974p">Because he was outstanding in his field.</p>
    <br>
    <p class="UniqueID563218974p">Why do programmers always mix up Halloween and Christmas?</p>
    <p class="UniqueID563218974p">Because Oct 31 == Dec 25</p>
    <br>
    <p class="UniqueID563218974p">I dropped a pear in my car this morning.</p>
    <p class="UniqueID563218974p">You should drop another one, then you would have a pair.</p>
    <br>
    <p class="UniqueID563218974p">Why does a chicken coop only have two doors?</p>
    <p class="UniqueID563218974p">Because if it had four doors it would be a chicken sedan.</p>
    <br>
    <p class="UniqueID563218974p">If you see a robbery at an Apple Store...</p>
    <p class="UniqueID563218974p">Does that make you an iWitness?</p>
    <br>
    <p class="UniqueID563218974p">Did you hear about the hungry clock?</p>
    <p class="UniqueID563218974p">It went back four seconds.</p>
    <br>
    <p class="UniqueID563218974p">What's the best thing about elevator jokes?</p>
    <p class="UniqueID563218974p">They work on so many levels.</p>
    <br>
    <p class="UniqueID563218974p">Why did the barber win the race?</p>
    <p class="UniqueID563218974p">He took a short cut.</p>
    <br>
    <p class="UniqueID563218974p">Why did Sweden start painting barcodes on the sides of their battleships?</p>
    <p class="UniqueID563218974p">So they could Scandinavian.</p>
    <br>
    <p class="UniqueID563218974p">What did the judge say to the dentist?</p>
    <p class="UniqueID563218974p">Do you swear to pull the tooth, the whole tooth and nothing but the tooth?</p>
    <br>
    <p class="UniqueID563218974p">Where does Fonzie like to go for lunch?</p>
    <p class="UniqueID563218974p">Chick-Fil-Eyyyyyyyy.</p>
    <br>
    <p class="UniqueID563218974p">How come a man driving a train got struck by lightning?</p>
    <p class="UniqueID563218974p">He was a good conductor.</p>
    <br>
    <p class="UniqueID563218974p">Where’s the bin?</p>
    <p class="UniqueID563218974p">I haven’t been anywhere!</p>
    <br>
    <p class="UniqueID563218974p">Where did you learn to make ice cream?</p>
    <p class="UniqueID563218974p">Sunday school.</p>
    <br>
    <p class="UniqueID563218974p">Why did the fireman wear red, white, and blue suspenders?</p>
    <p class="UniqueID563218974p">To hold his pants up.</p>
    <br>
    <p class="UniqueID563218974p">What do you call a suspicious looking laptop?</p>
    <p class="UniqueID563218974p">Asus</p>
    <br>
    <p class="UniqueID563218974p">Knock knock. 
     Who's there? 
     Little old lady. 
     Little old lady who?</p>
    <p class="UniqueID563218974p">I didn't know you could yodel!</p>
    <br>
    <p class="UniqueID563218974p">Why did the girl smear peanut butter on the road?</p>
    <p class="UniqueID563218974p">To go with the traffic jam.</p>
    <br>
    <p class="UniqueID563218974p">Can February march?</p>
    <p class="UniqueID563218974p">No, but April may.</p>
    <br>
    <p class="UniqueID563218974p">What do you get when you cross a snowman with a vampire?</p>
    <p class="UniqueID563218974p">Frostbite.</p>
    <br>
    <p class="UniqueID563218974p">What do you get when you cross a bee and a sheep?</p>
    <p class="UniqueID563218974p">A bah-humbug.</p>
    <br>
    <p class="UniqueID563218974p">What do you get when you cross a snowman with a vampire?</p>
    <p class="UniqueID563218974p">Frostbite.</p>
    <br>
    <p class="UniqueID563218974p">My older brother always tore the last pages of my comic books, and never told me why.</p>
    <p class="UniqueID563218974p">I had to draw my own conclusions.</p>
    <br>
    <p class="UniqueID563218974p">I'm reading a book about anti-gravity...</p>
    <p class="UniqueID563218974p">It's impossible to put down</p>
    <br>
    <p class="UniqueID563218974p">Why do wizards clean their teeth three times a day?</p>
    <p class="UniqueID563218974p">To prevent bat breath!</p>
    <br>
    <p class="UniqueID563218974p">What’s the object-oriented way to become wealthy?</p>
    <p class="UniqueID563218974p">Inheritance.</p>
    <br>
    <p class="UniqueID563218974p">How many kids with ADD does it take to change a lightbulb?</p>
    <p class="UniqueID563218974p">Let's go ride bikes!</p>
    <br>
    <p class="UniqueID563218974p">What kind of pants do ghosts wear?</p>
    <p class="UniqueID563218974p">Boo jeans.</p>
    <br>
    <p class="UniqueID563218974p">If you see a robbery at an Apple Store...</p>
    <p class="UniqueID563218974p">Does that make you an iWitness?</p>
    <br>
    <p class="UniqueID563218974p">What does a pirate pay for his corn?</p>
    <p class="UniqueID563218974p">A buccaneer!</p>
    <br>
    <p class="UniqueID563218974p">Did you hear about the cow who jumped over the barbed wire fence?</p>
    <p class="UniqueID563218974p">It was udder destruction.</p>
    <br>
    <p class="UniqueID563218974p">Knock knock. 
     Who's there? 
     Cows go. 
     Cows go who?</p>
    <p class="UniqueID563218974p">No, cows go moo.</p>
    <br>
    <p class="UniqueID563218974p">Why did the house go to the doctor?</p>
    <p class="UniqueID563218974p">It was having window panes.</p>
    <br>
    <p class="UniqueID563218974p">Why did the tomato blush?</p>
    <p class="UniqueID563218974p">Because it saw the salad dressing.</p>
    <br>
</div>
    `,
  },
];

apps.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // Convert names to uppercase for case-insensitive comparison
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) {
    return 1;
  }
  if (nameA > nameB) {
    return -1;
  }
  return 0; // names are equal
});

function addApps() {
  for (var i = 0; i < apps.length; i++) {
    const name = apps[i].name;
    const icon = apps[i].icon;
    const contentURL = textToDataURI(apps[i].content);
    const contentHtml = `<iframe class='windowIframe' src='${contentURL}' frameborder='0'></iframe>`;
    const encodedContentHtml = btoa(encodeURIComponent(contentHtml));
    const navigationItem = `
    <div class="navigationItem" onclick='createWindow("${name}", "${icon}", "${encodedContentHtml}")'>
      <span class="icon">
        <img style="height: 32px;" src="${icon}" alt="">
      </span>
      ${name}
    </div>`;
    const desktopButton = `
    <button class="desktopButton" onclick='createWindow("${name}", "${icon}", "${encodedContentHtml}")'>
      <img class="desktopButtonIcon" src="${icon}">
      ${name}
    </button>
    `;
    const navigation = document.getElementById("navigation");
    navigation.insertAdjacentHTML("afterbegin", navigationItem);
    const body = document.getElementById("body").querySelector;
    body.insertAdjacentHTML("afterbegin", desktopButton);
  }
}

function addApps2() {
  for (var i = 0; i < apps.length; i++) {
    const name = apps[i].name;
    const icon = apps[i].icon;
    const contentHtml = apps[i].content;
    const encodedContentURL = btoa(encodeURIComponent(contentHtml));
    const navigationItem = `
    <div class="navigationItem" onclick='createWindow("${name}", "${icon}", "${encodedContentURL}")'>
      <span class="icon">
        <img style="height: 32px;" src="${icon}" alt="">
      </span>
      ${name}
    </div>`;
    const desktopButton = `
    <button class="desktopButton" onclick='createWindow("${name}", "${icon}", "${encodedContentURL}")'>
      <img class="desktopButtonIcon" src="${icon}">
      ${name}
    </button>
    `;
    const navigation = document.getElementById("navigation");
    navigation.insertAdjacentHTML("afterbegin", navigationItem);
    const body = document.getElementById("body");
    body.insertAdjacentHTML("afterbegin", desktopButton);
  }
}

addApps2();
