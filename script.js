const checkoutBtns = document.querySelectorAll(".checkout-btn");

checkoutBtns.forEach((btn, index) => {
  const checkoutTL = new gsap.timeline({
    paused: true
  });

  const btnText = btn.querySelector(".checkout-btn__text");
  const btnIcon = btn.querySelector(".checkout-btn__icon");
  const btnSuccess = btn.querySelector(".checkout-btn__success");
  const btnFailure = btn.querySelector(".checkout-btn__failure");

  checkoutTL
    .to(btnText, {
      opacity: 0,
      duration: 0.75,
      ease: "power4.in"
    })
    .to(
      btnIcon,
      {
        x: 150,
        delay: 0.25,
        duration: 0.75,
        opacity: 0,
        ease: "back.in(1.7)"
      },
      "<"
    );
  btn.addEventListener("click", () => {
    if (index === 0) {
      checkoutTL
        .to(btn, {
          background: "#27ae60",
          ease: "power4.out",
          width: 300
        })
        .to(
          btnSuccess,
          {
            opacity: 1,
            ease: "power4.out",
            delay: 0.25
          },
          "<"
        );
    } else {
      checkoutTL
        .to(btn, {
          background: "#c0392b",
          ease: "power4.out",
          width: 300
        })
        .to(
          btnFailure,
          {
            opacity: 1,
            ease: "power4.out",
            delay: 0.25
          },
          "<"
        );
    }

    checkoutTL.play();

    setTimeout(() => {
      checkoutTL.restart();
      checkoutTL.pause();
    }, 6000);
  });
});
