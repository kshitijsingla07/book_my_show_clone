const settings = {
  arrows: true,
  autoplay: false,
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {breakpoint: 1024,
    settings:{
      slidesToShow: 3,
      slidesToScroll: 3,
    }},
    {breakpoint: 600,
    settings:{
      slidesToShow: 2,
      slidesToScroll: 2,
    }}
  ],
};

export default settings;
