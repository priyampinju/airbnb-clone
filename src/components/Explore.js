import React from "react";
import Slider from "react-slick";
import NextArrow from "../common/NextArrow";
import PrevArrow from "../common/PrevArrow";
import Filter from "../images/filter.svg";

const Explore = () => {
  const exploreTypes = [
    {
      id: 1,
      name: "top of the world",
      img: "https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg",
    },
    {
      id: 2,
      name: "Countryside",
      img: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
    },
    {
      id: 3,
      name: "Play",
      img: "https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg",
    },
    {
      id: 4,
      name: "Beachfront",
      img: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
    },
    {
      id: 5,
      name: "Lakefront",
      img: "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
    },
    {
      id: 6,
      name: "Boats",
      img: "https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg",
    },
    {
      id: 7,
      name: "Luxe",
      img: "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg",
    },
    {
      id: 8,
      name: "Beach",
      img: "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
    },
    {
      id: 9,
      name: "Lake",
      img: "https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg",
    },
    {
      id: 10,
      name: "Rooms",
      img: "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
    },
    {
      id: 11,
      name: "Vineyards",
      img: "https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg",
    },
    {
      id: 12,
      name: "New",
      img: "https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg",
    },
    {
      id: 13,
      name: "Tiny homes",
      img: "https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg",
    },
    {
      id: 14,
      name: "Surfing",
      img: "https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg",
    },
    {
      id: 15,
      name: "National parks",
      img: "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg",
    },
    {
      id: 16,
      name: "Castles",
      img: "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
    },
    {
      id: 17,
      name: "Amazing views",
      img: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
    },
    {
      id: 18,
      name: "Cabins",
      img: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
    },
    {
      id: 19,
      name: "Tropical",
      img: "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg",
    },
    {
      id: 20,
      name: "OMG!",
      img: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
    },
    {
      id: 21,
      name: "Amazing pools",
      img: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
    },
    {
      id: 22,
      name: "Camping",
      img: "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg",
    },
    {
      id: 23,
      name: "Camper vans",
      img: "https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg",
    },
    {
      id: 24,
      name: "Islands",
      img: "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
    },
    {
      id: 25,
      name: "Arctic",
      img: "https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg",
    },
    {
      id: 26,
      name: "Design",
      img: "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg",
    },
    {
      id: 27,
      name: "Trending",
      img: "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
    },
    {
      id: 28,
      name: "A-frames",
      img: "https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg",
    },
    {
      id: 29,
      name: "Caves",
      img: "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg",
    },
    {
      id: 30,
      name: "Iconic cities",
      img: "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg",
    },
    {
      id: 31,
      name: "Treehouses",
      img: "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg",
    },
    {
      id: 32,
      name: "Golfing",
      img: "https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg",
    },
    {
      id: 33,
      name: "Mansions",
      img: "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
    },
    {
      id: 34,
      name: "farms",
      img: "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
    },
    {
      id: 35,
      name: "Bed & breakfasts",
      img: "https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg",
    },
    {
      id: 36,
      name: "Earth homes",
      img: "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
    },
    {
      id: 37,
      name: "Historical homes",
      img: "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg",
    },
    {
      id: 38,
      name: "Hanoks",
      img: "https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg",
    },
    {
      id: 39,
      name: "Skiing",
      img: "https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg",
    },
    {
      id: 40,
      name: "Cycladic homes",
      img: "https://a0.muscache.com/pictures/e4b12c1b-409b-4cb6-a674-7c1284449f6e.jpg",
    },
    {
      id: 41,
      name: "Chef's kitchens",
      img: "https://a0.muscache.com/pictures/ddd13204-a5ae-4532-898c-2e595b1bb15f.jpg",
    },
    {
      id: 42,
      name: "Shephard's hurts",
      img: "https://a0.muscache.com/pictures/747b326c-cb8f-41cf-a7f9-809ab646e10c.jpg",
    },
    {
      id: 43,
      name: "Off-the-grid",
      img: "https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg",
    },
    {
      id: 44,
      name: "Windmills",
      img: "https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg",
    },
    {
      id: 45,
      name: "Minsus",
      img: "https://a0.muscache.com/pictures/48b55f09-f51c-4ff5-b2c6-7f6bd4d1e049.jpg",
    },
    {
      id: 46,
      name: "Casas particulares",
      img: "https://a0.muscache.com/pictures/251c0635-cc91-4ef7-bb13-1084d5229446.jpg",
    },
    {
      id: 47,
      name: "Containers",
      img: "https://a0.muscache.com/pictures/0ff9740e-52a2-4cd5-ae5a-94e1bfb560d6.jpg",
    },
    {
      id: 48,
      name: "Ryokans",
      img: "https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg",
    },
    {
      id: 49,
      name: "Domes",
      img: "https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg",
    },
    {
      id: 50,
      name: "Barns",
      img: "https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg",
    },
    {
      id: 51,
      name: "Desert",
      img: "https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg",
    },
    {
      id: 52,
      name: "Yurts",
      img: "https://a0.muscache.com/pictures/4759a0a7-96a8-4dcd-9490-ed785af6df14.jpg",
    },
    {
      id: 53,
      name: "Towers",
      img: "https://a0.muscache.com/pictures/d721318f-4752-417d-b4fa-77da3cbc3269.jpg",
    },
    {
      id: 54,
      name: "Houseboats",
      img: "https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg",
    },
    {
      id: 55,
      name: "Adapted",
      img: "https://a0.muscache.com/pictures/e22b0816-f0f3-42a0-a5db-e0f1fa93292b.jpg",
    },
    {
      id: 56,
      name: "Ski-in/out",
      img: "https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg",
    },
    {
      id: 57,
      name: "Creative spaces",
      img: "https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg",
    },
    {
      id: 58,
      name: "Grand pianos",
      img: "https://a0.muscache.com/pictures/8eccb972-4bd6-43c5-ac83-27822c0d3dcd.jpg",
    },
    {
      id: 59,
      name: "Trulli",
      img: "https://a0.muscache.com/pictures/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg",
    },
    {
      id: 60,
      name: "Riads",
      img: "https://a0.muscache.com/pictures/7ff6e4a1-51b4-4671-bc9a-6f523f196c61.jpg",
    },
    {
      id: 61,
      name: "Dammusi",
      img: "https://a0.muscache.com/pictures/c9157d0a-98fe-4516-af81-44022118fbc7.jpg",
    },
  ];

  const settings = {
    infinite: false,
    speed: 1200,
    slidesToShow: 9,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="explore-container mx-9 my-5 flex items-center border-t-[1px] h-[90px] px-[40px]">
      <div className="explore-slider w-[900px]">
        <Slider {...settings}>
          {exploreTypes.map((type) => {
            return (
              <div>
                <div className="bg-transparent flex flex-col items-center explore-slider">
                  <img
                    src={type.img}
                    alt="Icon"
                    className="explore-img h-[24px] w-[24px]"
                  />
                  <span
                    className="explore-name text-xs mt-2 cursor-pointer"
                    tabIndex="0"
                  >
                    {type.name}
                  </span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className=" flex w-[100%] justify-around">
        <div className="flex items-center justify-around border border-solid rounded-xl h-[48px]">
          <img src={Filter} className="h-[16px] px-2" />
          <div className="pr-3 text-[12px] font-semibold">Filters</div>
        </div>
        <div className="flex items-center h-[48px] border rounded-xl px-2 text-[12px]">
          <div className="font-semibold">Display price before taxes</div>
          <label class="relative inline-block h-[24px] w-[36px] ml-2">
            <input type="checkbox" className="" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Explore;
