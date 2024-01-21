let btn_submiut = document.querySelector(".form_sub");
let reperoir_ = document.querySelector(".scened");
let isGenerate = false;

let update_Image_List = (...myData) => {
  console.log("myData", myData);

  myData.forEach((elemIlg, index) => {
    let cadrImgg = reperoir_.querySelectorAll(".card_img")[index];
    let imgg = cadrImgg.querySelector("img");
    let downloadBNtn = cadrImgg.querySelector(".dowdload_imag");

    // set Image
    const aiGeneree = "data:image/jpeg;base64," + elemIlg.b64_json;
    imgg.src = aiGeneree;

    // whenen Image is Loadad remove class LOADING
    imgg.onload = () => {
      cadrImgg.classList.remove("loading_");
      downloadBNtn.setAttribute("href", aiGeneree);
      downloadBNtn.setAttribute("download", new Date().getTime() + ".jpg");
    };
  });
};

let generateImageFromAPI = async (userPrp_, userNbrImg_) => {
  let key_fromSiteWeb = "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";
  key_fromSiteWeb = "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";
  // https://platform.openai.com/account/api-keys
  try {
    console.log(userNbrImg_, userPrp_);

    let response_ = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key_fromSiteWeb}`,
        },
        body: JSON.stringify({
          prompt: userPrp_,
          n: parseInt(userNbrImg_),
          size: "512x512",
          response_format: "b64_json",
        }),
      }
    );

    if (!response_.ok)
      throw new Error("Faild to generate images !!! tyr again");

    let { data } = await response_.json();

    console.log("data", data);

    update_Image_List(...data);
  } catch (error) {
    console.log("Error !!!!!!!!!!!");
  } finally {
    isGenerate = false;
  }
};

/*************************************************** */

let handleSubmit_Func = (e) => {
  e.preventDefault();

  if (isGenerate) return;
  isGenerate = true;

  let userPromp = e.target.imageserch.value;
  let userNbrImg = e.target.nbrImage.value;

  console.log(userNbrImg, userPromp);

  let divv = "";

  for (let ii = 0; ii < userNbrImg; ii++) {
    divv += `<div class="card_img loading_">
    <img src="P01/loader.svg" alt="image03" /> 
        <a class="dowdload_imag" href="P01/img-1.jpg">
            <img src="P01/download.svg" alt="btn downLoad" />
        </a> 
</div>`;
  }
  reperoir_.innerHTML = divv;
  generateImageFromAPI(userPromp, userNbrImg);
};

btn_submiut.addEventListener("submit", handleSubmit_Func);








// MILOU Mohamed