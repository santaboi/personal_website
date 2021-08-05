let t1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.intro' ,
        start: "center bottom"
    }
});

t1.from(".my-selfie" , { x : 200 , opacity : 0 , duration: 1.5})
    .from(".content" , {y:300 , opacity: 0 , duration: 1} , "-=1")