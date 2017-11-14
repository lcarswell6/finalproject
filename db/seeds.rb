Venue.destroy_all
Post.destroy_all
User.destroy_all

goldroom = Venue.create(
    name: "Gold Room",
    address: "West Piedmont Rd NE, Atlanta, GA 30324",
    dress_type: "Night Club Casual",
    description: "Gold Room is 7,500 square feet with two floors of lavish décor that will invigorate the senses, an astounding audio-visual environment and world-class customer service.",
    rating: "3"    
)

flipflops = Venue.create(
    name: "Flip Flops",
    address: "1140 CRESCENT AVE, Atlanta, GA 30309",
    dress_type: "Casual", 
    description: "Named for It's laid back atmosphere, Flip Flops is Midtown's latest hot spot. This new bar offers a piece of Margaritaville in the heart of Atlanta. Customers will enjoy two levels of live music, dancing and entertainment.",
    rating: '4'
    )

opium = Venue.create(
    name: "Opium",
    address: "960 Spring Street NW, Atlanta, GA 30309",
    dress_type: "Night Club Casual",
    description: "Located in Midtown, Opium is the newest, most eclectic night club in Atlanta.",
    rating: "4"
)

gr_post1 = Post.create(
    title: "I WENT TO GOLD ROOM",
    event: "Gold Room Fridays",
    description: "Ladies, if you wear a simple and stylish dress with some nice shoes I'm SURE you will get in with no problems. Most of the guys in our group had on jeans with dressy shoes and blazers, but some of the other guys there had on regular shirts, jeans and nice sneakers. ",
    image_url: "https://i.imgur.com/jCW37iv.jpg",
    rating: "5"
)

flipflops_post1 = Post.create(
    title: "flip flops",
    event: "just a saturday night",
    description: "So, I went in with little to no expectations because the bar's name is literally flip flops. Seems like all the guys just casual with T-shirts and jeans or button-ups and slacks. All the girls were wearing fitting dresses or some jeans and a decent top. All in all it was pretty relaxed, however, I did see one guy get denied because his jeans were too baggy.",
    image_url: "https://i.imgur.com/uR2t5vG.jpg",
    rating: "4"
)

opium_post1 = Post.create(
    title: "first time since it was Prive",
    event: "112 live show",
    description: "Basically everyone showed up dressed to impress so I couldn't tell you what the normal dress code would be.",
    image_url: "",
    rating: "1"
)

monica = User.create(
    name: "Monica",
    image_url: "https://i.imgur.com/jCW37iv.jpg",
    rating: "5"
)

chad = User.create(
    name: "Chad",
    image_url: "https://i.imgur.com/uR2t5vG.jpg",
    rating: "4"
)

trevor = User.create(
    name: "Trevor",
    image_url: " ",
    rating: "1"
)