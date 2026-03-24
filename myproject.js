const get_mobile = document.getElementById("mobile_row");
const get_essentials = document.getElementById("essentials-row");



//----------------------------search-input-------------------------//





// ------------mobile-mapping------------//

const mobileData = [
    {
        image: "image-mobile/image_3.png",
        name: "Galaxy S22 (4GB | 64GB)",
        price: "29999",
        delete: "33999",
        save: "4000",

    },

    {
        image: "image-mobile/image_4.png",
        name: "Galaxy M13 (4GB | 64GB)",
        price: "10999",
        delete: "13999",
        save: "3000",
    },

    {
        image: "image-mobile/image_5.png",
        name: "Galaxy M33 (4GB | 64GB)",
        price: "16999",
        delete: "24999",
        save: "8000",
    },

    {
        image: "image-mobile/image_6.png",
        name: "Galaxy M53 (4GB | 64GB)",
        price: "31999",
        delete: "40999",
        save: "9000",
    },

    {
        image: "image-mobile/image_7.png",
        name: "Galaxy S22 (8GB | 128GB)",
        price: "67999",
        delete: "85999",
        save: "9000",
    },

    {
        image: "image-mobile/image_3.png",
        name: "Galaxy S22 (4GB | 64GB)",
        price: "29999",
        delete: "33999",
        save: "4000",

    },

    {
        image: "image-mobile/image_4.png",
        name: "Galaxy M13 (4GB | 64GB)",
        price: "10999",
        delete: "13999",
        save: "3000",
    },

    {
        image: "image-mobile/image_5.png",
        name: "Galaxy M33 (4GB | 64GB)",
        price: "16999",
        delete: "24999",
        save: "8000",
    },

    {
        image: "image-mobile/image_6.png",
        name: "Galaxy M53 (4GB | 64GB)",
        price: "31999",
        delete: "40999",
        save: "9000",
    },

    {
        image: "image-mobile/image_3.png",
        name: "Galaxy S22 (8GB | 128GB)",
        price: "67999",
        delete: "85999",
        save: "9000",
    },

    {
        image: "image-mobile/image_7.png",
        name: "Galaxy M53 (4GB | 64GB)",
        price: "31999",
        delete: "40999",
        save: "9000",
    },

    {
        image: "image-mobile/image_3.png",
        name: "Galaxy S22 (8GB | 128GB)",
        price: "67999",
        delete: "85999",
        save: "9000",
    }




];


// .............................JSON data.................................

const jsondata = JSON.stringify(mobileData);
const objectdata = JSON.parse(jsondata);


const newmobile = objectdata.map((item) => {
    return `
    <div class="col-6 col-md-4 col-lg-2">
                <div id="phone1" class="card product-card text-center p-2">

                    <img src="${item.image}" class="card-img-top" alt="Galaxy S22 Ultra" />

                    <div class="card-body p-2">

                        <p class="card-title small mb-1">"${item.name}"</p>
                        <p class="price mb-0 fw-bold">${item.price}<span
                                class="text-decoration-line-through  text-muted small">"${item.delete}"</span></p>
                        <p class="save text-success small">"${item.save}"</p>

                    </div>
                </div>
            </div>
    `
}).join("");


console.log()

get_mobile.innerHTML = newmobile;

/////...............................................................

/////...............................................................

function aslam() {
    const select_mobile = document.getElementById("select_option");
    const get_mobile = document.getElementById("mobile_row");
    const mobile = select_mobile.value;


    let filteredMobiles;

    if (mobile === "All") {
        filteredMobiles = objectdata
    } else {
        filteredMobiles = objectdata.filter((m) => (m.name === mobile))
    }

    //   const filteredMobiles = mobileData.filter((m) =>( m.name === mobile));


    const newFilteredData = filteredMobiles.map((m) => {
        return `
      <div class="col-6 col-md-4  col-lg-2">
        <div class="card product-card text-center p-2 shadow-sm">
          <img src="${m.image}" class="card-img-top" alt="${m.name}" />
          <div class="card-body p-2">
            <p class="card-title small mb-1">"${m.name}"</p>
            <p class="price mb-0 fw-bold">
             " ${m.price}"
              <span class="text-decoration-line-through text-muted small">"${m.delete}"</span>
            </p>
            <p class="save text-success small">"${m.save}"</p>
          </div>
        </div>
      </div>
    `;
    }).join('');

    get_mobile.innerHTML = newFilteredData;
}




//............daily essential..............//

const essential = [
    {
        image: "image-fruit/all.png",
        name: "Daily_essentials",
        discount: "UP TP 50% OFF",

    },

    {
        image: "image-fruit/mix.png",
        name: "Vegitable",
        discount: "UP TP 50% OFF",
    },

    {
        image: "image-fruit/fruits.png",
        name: "Fruits",
        discount: "UP TP 50% OFF",
    },

    {
        image: "image-fruit/cherry.png",
        name: "Strowberry",
        discount: "UP TP 50% OFF",
    },

    {
        image: "image-fruit/mango.png",
        name: "Mango",
        discount: "UP TP 50% OFF",
    },

    {
        image: "image-fruit/angur.png",
        name: "cherry",
        discount: "UP TP 50% OFF",
    },

    {
        image: "image-fruit/all.png",
        name: "Daily_essentials",
        discount: "UP TP 50% OFF",

    },

    {
        image: "image-fruit/mix.png",
        name: "Vegitable",
        discount: "UP TP 50% OFF",
    },

    {
        image: "image-fruit/fruits.png",
        name: "Fruits",
        discount: "UP TP 50% OFF",
    },

    {
        image: "image-fruit/cherry.png",
        name: "Strowberry",
        discount: "UP TP 50% OFF",
    },

    {
        image: "image-fruit/mango.png",
        name: "Mango",
        discount: "UP TP 50% OFF",
    },

    {
        image: "image-fruit/angur.png",
        name: "cherry",
        discount: "UP TP 50% OFF",
    },



];


// .........................JSON data..................................

const jasonessentialdata = JSON.stringify(essential);
const objectessentialdata = JSON.parse(jasonessentialdata);


const newEssential = objectessentialdata.map((e) => {
    return (
        `
        <div class="col-6 col-md-4 col-lg-2">

                <div id="essential1" class="card essential-card text-center p-2">

                    <img src="${e.image}" class="card-img-top" alt="Daily Essentials">
                    <div class="card-body p-2">

                        <p class="small mb-0">"${e.name}"</p>
                        <p class="text-muted small">"${e.discount}"</p>

                    </div>
                </div>
            </div>

        `
    )
}).join("");

get_essentials.innerHTML = newEssential;

// ................................filter data....................................

function hossain() {
    const get_option = document.getElementById("essentials_option");
    const get_essentials = document.getElementById("essentials-row");
    const selectoption = get_option.value;

    let filteredessential;

    if (selectoption === "All") {
        filteredessential = objectessentialdata;
    } else {
        filteredessential = objectessentialdata.filter((f) => f.name === selectoption);
    }

    const newFilteredessential = filteredessential.map((f) => {

        return `
      <div class="col-6 col-md-4 col-lg-2">
        <div class="card essential-card text-center p-2">
          <img src="${f.image}" class="card-img-top" alt="${f.name}">
          <div class="card-body p-2">
            <p class="small mb-0">${f.name}</p>
            <p class="text-muted small">${f.discount}</p>
          </div>
        </div>
      </div>
    `
    }).join("");

    get_essentials.innerHTML = newFilteredessential;
};



