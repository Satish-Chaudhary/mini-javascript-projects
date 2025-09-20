const users = [
    {
        name: "Kunal Mahto",
        pic: "https://plus.unsplash.com/premium_photo-1755617893484-e34cf4aaba3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
        bio: "Silent chaos in a loud world."
    },
    {
        name: "Aarav Sharma",
        pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60",
        bio: "Dreamer | Believer | Achiever."
    },
    {
        name: "Riya Kapoor",
        pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
        bio: "Exploring life one step at a time."
    },
    {
        name: "Aditya Verma",
        pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
        bio: "Tech enthusiast & coffee lover ☕."
    },
    {
        name: "Neha Singh",
        pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60",
        bio: "Chasing sunsets and good vibes."
    },
    {
        name: "Rohan Gupta",
        pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60",
        bio: "Music in my soul, code in my veins."
    },
    {
        name: "Ishita Mehra",
        pic: "https://images.unsplash.com/photo-1594026724063-fcf520d86e23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
        bio: "Smile, sparkle, shine ✨."
    },
    {
        name: "Siddharth Yadav",
        pic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60",
        bio: "Adventurer at heart, coder by mind."
    }
];


// sare users show karana 
// filter karna har baar input karne par
// show karana filtered users



function showUsers(arr) {
    // Select the parent container where we want to add the card
    const container = document.querySelector(".cards");
    container.innerHTML = "";

    if (arr.length === 0) {
        container.innerHTML = "<h2>User Not Found ! </h2>";
        container.style.color = "red";
        container.style.fontSize = "50px";
        return;
    }
    arr.forEach((user) => {
        // === Create Card ===
        const card = document.createElement("div");
        card.classList.add("card");

        // === Background Image ===
        const img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img");

        // === Blurred Layer ===
        const blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage = `url(${user.pic})`;
        blurredLayer.classList.add("blurred-layer");

        // === Content Container ===
        const content = document.createElement("div");
        content.classList.add("content");

        // Heading
        const heading = document.createElement("h3");
        heading.textContent = user.name;

        // Paragraph
        const para = document.createElement("p");
        para.textContent = user.bio;

        // Append heading and paragraph to content
        content.appendChild(heading);
        content.appendChild(para);

        // Append all children into card
        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        // Finally append card into container
        container.appendChild(card);

    });
}
showUsers(users);

let input = document.querySelector(".inp");
input.addEventListener("input", (e) => {
    let newUser = users.filter((user) => {
        return user.name.startsWith(input.value);
    });
    document.querySelector(".cards").innerHTML = "";
    showUsers(newUser);
})
