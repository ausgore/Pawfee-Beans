const cats = {
    velvet: {
        age: "1 Year Old",
        gender: "Female",
        description: "Vibrant, enthusiastic and a touch of drama queen - Meet Velvet! She loves everyone, including children. She will be the first one to zoom over, skid to a stop and flop on her back to show you her tummy. If startled, she'll turn into a feather duster in an instant, and turn back to normal in another second. She'll brighten your day!"
    },
    pepper: {
        age: "4.5 Months Old",
        gender: "Female",
        description: "Sweet and spicy! Pepper loves to play at one moment, and snuggle up for a big nap at another. She sometimes play so hard that she even pants and take a little break. You'll often find her hiding behind things to sneak up and pounce on her siblings. You'll often find her in silly sleeping positions, such as her head hanging down. She's confident, and she loves to explore. She will always try to break out of any room she's locked in!"
    },
    ginger: {
        age: "2 Years Old",
        gender: "Male",
        description: "A keen and silent observer. Ginger gets along with other cats, but is also very skilled at minding his own business. He would do very well with a single person, or as a fellow companion to another lonely cat."
    },
    silver: {
       age: "1 Year Old",
       gender: "Male",
       description: "Silver is a handsome young fellow who usually stays reserved. He look forward to some well deserved 'me time', and is gentle with other cats. He purrs affectionately with anyone who treats him well, but will move on to do his own things." 
    },
    omy: {
        age: "3 Years Old",
        gender: "Female",
        description: "At the beginning, Omy was very afraid of humans always acted very defensively towards everybody. She came to us when she was not able to stay in her first home. It took her a long time to be experienced and well-mannered around humans. Now, she's able to be very playful and exuberantly affectionate for a couple of minutes."
    },
    fluff: {
        age: "2 Years Old",
        gender: "Male",
        description: "Fluffy is a very swet boy, and acts like a big brother to many. He loves climbing the stairways, walking on beams and eating his favourite churros. He's friendly, but do much prefer being approached slow and gentle."
    },
    snowball: {
        age: "4 Years Old",
        gender: "Female",
        description: "The oldest cat in our family, but still behaves a bit like a baby! Snowball loves to wrestle, stalk, pounce and demonstrate her instinctual hunting skills. She's as busy as any cat would be, but she loves snuggling when she's in the mood. She's so happy around company, and would explore every nook and cranny."
    },
    azura: {
        age: "7 Months Old",
        gender: "Female",
        description: "Azura came to Pawfee Beans after not being able to stay in her first home. So, she comes with experience and very good manners. She's very playful and exuberantly affectionate among company. If you love high energy, you'll love Azura."
    }
}

$(".cat-image").click(function() {
    const image = $(this).attr('src').split('/')[1]
    const name = image.split('.')[0]
    const { age, gender, description } = cats[name]

    $("#modal-age").html(age)
    $("#modal-gender").html(gender)
    $("#modal-paragraph").html(description)
    $("#modal-image").attr('src', `images/${name}.jpg`)
    $("#modal-name").html(name.substr(0,1).toUpperCase() + name.substr(1, name.length))
})
