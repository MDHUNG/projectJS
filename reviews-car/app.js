//local reviews data
const reviews = [
    {
      id:1,
      name:"S450-Maybach",
      job:"Giá lăn bánh từ 8,219 tỷ đồng",
      img:
        "./img/s450-maybach.jpg",
      text:"Mercedes Benz Maybach S450 4Matic 2022 cũng là một trong các dòng sản phẩm chất lượng hảo hạng trong thế hệ Maybach, sử dụng khối động cơ nhỏ hơn so với các đàn anh như S560, S580, S600, S650.Nhưng Maybach S450 4Matic 2022 cũng hội tụ những tinh hoa, những phẩm chất cao quý nhất cho không gian Cabin, một không gian thương gia cho người dùng.",
    },
    {
      id:2,
      name:"S500-Maybach",
      job:" giá 12 tỷ đồng",
      img:
        "./img/s500-maybach.jpg",
      text:"S-Class là dòng sedan hạng sang hàng đầu của Mercedes-Benz. Trong số đó, những chiếc S500 Maybach, S600 Maybach là những model cao cấp nhất. Nếu Mercedes-Maybach S600 đã xuất hiện khá nhiều tại Việt Nam, thì những chiếc Mercedes Maybach S500 lại khá hiếm.",
    },
    {
      id:3,
      name:"S600-Maybach",
      job:" giá 16,420 tỷ đồng",
      img:
        "./img/s600-maybach.jpg",
      text:"Mercedes S600 là mẫu xe sang trọng đẳng cấp bậc nhất mà các doanh nhân không nên bỏ qua. Với thiết kế nội – ngoại thất tinh tế kết hợp với công nghệ hiện đại, chiếc xế hộp S600 đã và đang trở thành một trong số những chiếc xe được săn lùng nhất hiện nay.",
    },
    {
      id:4,
      name:"S600 Pullman",
      job:" giá hơn 30 tỷ đồng",
      img:
        "./img/s600 pullman.jpg",
      text:"Khách hàng sẽ phải đợi một năm rưỡi kể từ thời điểm đặt mua xe. Mercedes-Maybach S600 Pullman Guard 2019 chống đạn là mẫu xe chuyên dành cho giới nguyên thủ và giới siêu giàu",
    },
    {
      id:5,
      name:"S650 Pullman",
      job:" trên 80 tỷ đồng",
      img:
        "./img/s650-pullman.jpg",
      text:"Mercedes-Maybach vốn nổi tiếng với những mẫu sedan và SUV siêu sang, một trong số đó là chiếc S650 Pullman dành cho những vị chủ tịch hay nguyên thủ quốc gia.",
    },
  
  ];
  // select 
  const img = document.getElementById('person-img');
  const author = document.querySelector('.author');
  const job = document.querySelector('.job');
  const info = document.getElementById('info');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.getElementById('btn-next');
  const randomBtn = document.querySelector('.random-btn');
  
  //set item
  
  let currentItem = 0;
  
  //load item
  window.addEventListener('DOMContentLoaded', function() {
    showPerson(currentItem)
  });
  
  function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  
  };
   
  // function show
  
  function nextShow() {
    currentItem++;
    if (currentItem > reviews.length -1){
      currentItem = 0;
    }
    else  if(currentItem < 0){
      currentItem = Math.abs(currentItem);
    }
    showPerson(currentItem);
  };
  
  function prevShow(){
    currentItem-- ;
    if(currentItem < 0){
      if(Math.abs(currentItem) > reviews.length-1){
        currentItem = 0;
      }
    }
    showPerson(Math.abs(currentItem));
  };
  
  // addEventListener
  
  nextBtn.addEventListener('click', nextShow);
  prevBtn.addEventListener('click', prevShow);
  
  // keyEvent
  
  addEventListener('keydown', function(e) {
    if(e.isComposing || e.keyCode === 39){
      nextShow();
    }
  })
  
  addEventListener('keydown', function(e) {
    if(e.isComposing || e.keyCode === 37){
      prevShow()
    }
  })
  
  //random show
  
  randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  })