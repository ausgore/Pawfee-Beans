const reviews = [
    "The overall vibe at the cafe was very comfortable and friendly as staff and patrons alike were all kind and considerate towards the little creatures. The sole male staff was exceptionally well-mannered and courteous. We very much enjoyed our 2 hours stay there!",
    "Cats are very lovely animals. They have a lot of rescued strays here which is very good. Just a pity there isn’t much interaction with them such as playing with toys etc. nonetheless still have a good time with them.",
    "It was a great experience visiting the Cat cafe! My children did really enjoy touching and petting the cats. It is amazing that these feline animals are so cute that they even went  top of our  table and trying to gulp our drinks! I think for $16 for 2 hours with complementary drinks is really worth it. The place is really clean, quite and just also nice to relax.",
    "Cats here are very tame and welcoming of pets! By far the more well maintained cat cafe there is! Pretty underrated if you ask me, definitely come by if you love cats!",
    "Love the atmosphere. The cats are super cute and the staffs are very friendly and helpful. They tell us what to do and not to do with cats. They also take a good care of the cats and make sure customers are comfortable.",
    "Very lovely place. All the cats look healthy and well care for. Staff gave specific instructions on how to handle the cats. The cafe is clean and smell normal. Would love to visit again."
]

setInterval(function() {
    const stars = document.querySelectorAll(".stars")
    for (const star of stars) {
        // Remove every current star
        let child = star.lastElementChild
        while (child) {
            star.removeChild(child)
            child = star.lastElementChild
        }
        // Add new stars
        const noOfStars = Math.floor(Math.random() * (5 - 4 + 1)) + 4;
        const arrayAppend = getArrayToAppend(noOfStars)
        for (const element of arrayAppend) star.appendChild(element)
    }

    const prevIndexes = []
    const texts = document.querySelectorAll(".review-text")
    for (const text of texts) {
        // Prevent same review in the same load
        let index = Math.floor(Math.random() * reviews.length)
        while (prevIndexes.includes(index)) index = Math.floor(Math.random() * reviews.length)
        prevIndexes.push(index)

        text.style.animation = "fadeText 2s"
        text.innerHTML = reviews[index]
        setTimeout(() => text.style.animation = "", 3000)
    }
}, 10000)

function getArrayToAppend(numberOfStars) {
    const array = []
    for (let i = 0; i < numberOfStars; i++) {
        const element = document.createElement("i")
        element.style.animation = "fadeText 2s"
        element.classList.add("fa-solid", "fa-star", "new-star")
        array.push(element)
    }
    hasHalfStar = 5 - numberOfStars
    if (hasHalfStar) {
        const element2 = document.createElement("i")
        element2.classList.add("fa-solid", "fa-star-half-stroke", "new-star")
        element2.style.animation = "fadeText 2s"
        array.push(element2)
    }
    return array
}

const productDescriptions = {
    product1: "Cat prints on both sides! Two colours for the price of one. 100% premium cotton fabric cat print from Japan and Taiwan. High quality, adjustable black elastic bands. Handmade with love in Singapore.",
    product2: "More comfortable and better looking than a plastic cone! Your cat will still be able to eat, sleep, walk around and play with ease in these very comfortable cushion recovery collars.",
    product3: "Handmade from heavy cotton twine, these pastel cat beds are pretty and super durable! Cats will love it, and use the base like a scratch pad before lying in it."
}
$(".product1, .product2, .product3").click(function() {
    document.getElementById("popupImage").src = $(this)[0].children[0].src
    document.getElementById("popupTitle").innerHTML = $(this)[0].children[1].children[0].innerHTML
    document.getElementById("popupPrice").innerHTML = $(this)[0].children[1].children[1].innerHTML
    document.getElementById("popupDiscount").innerHTML = $(this)[0].children[1].children[2].innerHTML

    const product = $(this).attr('class').split(' ')[1]
    document.getElementById("popupDescription").innerHTML = productDescriptions[product]
})

$("#popupImage").ready(function() {
    $(".zoom").magnify()
})

introJs().setOptions({
    showProgress: true,
    disableInteraction: true,
    steps: [{
        element: document.querySelector(".intro-1"),
        title: "👋 Hi there!",
        intro: "Welcome to Pawfee Beans! Glad to have you with us. Let me give you a quick tour on how to navigate through this website.",
    }, {
        element: document.querySelector(".navbar-nav"),
        intro: "This is the navigation bar. This will be the main method of how you'll be surfing through our pages.",
        position: 'right'
    }, {
        element: document.querySelector("#google_translate_element"),
        intro: "At any point in time, you can always change the language of our website to your preference, everything should be translated as accurately as possible.",
        position: 'bottom'
    }, {
        element: document.querySelector("#product-description"),
        intro: "These are our featured products that you can purchase for you and your cats. Keep track because we have frequent discounts!<br><br>You can make a direct purchase by clicking on the product.",
        position: "bottom",
    }, {
        element: document.querySelector(".footer-bottom-padding"),
        intro: "You can reach us with the following contact information below. We will do our best to respond to your inquiries as quickly as possible.<br><br>You can also use our livechat feature by clicking on the blue button on the bottom right corner of the screen."
    }, {
        element: document.querySelector(".intro-1"),
        title: "And you're done!",
        intro: "This is the end of the tour! Hope to see you at Pawfee Beans, have a good day! 👋"
    }]
})
.start()