gsap.from(".text", {
    y: 100, // Start position from below
    opacity: 0, // Initial opacity
    duration: 1, // Animation duration
    stagger: 0.5 // Staggered animation for each item
  });
  gsap.from(".image",{
    y: 100, // Start position from below
    opacity: 0, // Initial opacity
    duration: 1, // Animation duration
    stagger: 0.5 // Staggered animation for each item
  })

  // Define the animation
gsap.registerPlugin(ScrollTrigger);

gsap.from("#how-works", {
  scrollTrigger: {
    trigger: "#how-works",
    start: "top 80%", // Adjust the start point as needed
    end: "bottom 80%", // Adjust the end point as needed
    scrub: 1, // Smooth scrubbing effect
  },
  opacity: 0,
  y: 50,
  stagger: 0.5, // Stagger animation for each flow-container
});
gsap.from(".flow-container", {
    scrollTrigger: {
      trigger: "#how-works",
      start: "top 80%", // Adjust the start point as needed
      end: "bottom 80%", // Adjust the end point as needed
      scrub: 1, // Smooth scrubbing effect
    },
    opacity: 0,
    y: 50,
    stagger: 0.5, // Stagger animation for each flow-container
  });

