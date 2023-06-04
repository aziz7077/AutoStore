import React, { useEffect, useState } from "react";
import s from "./ShowCars.module.scss";
import classNames from "classnames";
import Urus from "../../public/LamborginiUrus.png";
import porshe from "../../public/Porshe.png";
import ferrari from "../../public/Ferrari.png";
import rols from "../../public/RolsRoyls.png";
import Image from "next/image";
import ShowCarsCard from "../ShowCarsCard/ShowCarsCard";
import { motion } from "framer-motion";
import { Modal } from "antd";
import ShowCarsCardForModal from "../ShowCarsCardForModal/ShowCarsCardForModal";

const ShowCars = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [open, setOpen] = useState(false)
  const [cars, setCars] = useState([
    {
      img: Urus,
      title: "Lamborghini Urus",
      date: 2018,
      rented: 200,
      daily: 1234,
      id: 1,
    },
    {
      img: ferrari,
      title: "Ferrari Roma",
      date: 2021,
      rented: 500,
      daily: 144,
      id: 2,
    },
    {
      img: rols,
      title: "Rolls-Royce Ghost",
      date: 2010,
      rented: 400,
      daily: 1104,
      id: 3,
    },
    {
      img: porshe,
      title: "Porsche 911 Turbo S",
      date: 2013,
      rented: 700,
      daily: 541,
      id: 4,
    },
  ]);

  function filterCarsByDate() {
    const sortedCars = cars.sort((a, b) => b.date - a.date);
    setCars([...sortedCars]);
  }

  function sortByRented() {
    const sortedCars = cars.sort((a, b) => b.rented - a.rented);
    setCars([...sortedCars]);
  }

  function sortByOffer() {
    const sortedCars = cars.sort((a, b) => a.id - b.id);
    setCars([...sortedCars]);
  }

  function sortByDaily() {
    const sortedCars = cars.sort((a, b) => a.daily - b.daily);
    setCars([...sortedCars]);
  }

	const handleFilterClick = (filter) => {
		setSelectedFilter(filter);
	};

  return (
    <section className={s.showcars_section} id="carList">
      <div className={s.cars_filter}>
        <p
          className={classNames(s.cars_filter_title, {
            [s.cars_filter_title_active]: selectedFilter === "special",
          })}
          onClick={() => handleFilterClick("special") || sortByOffer()}
        >
          Special Offer
        </p>
        <p
          className={classNames(s.cars_filter_title, {
            [s.cars_filter_title_active]: selectedFilter === "new",
          })}
          onClick={() => handleFilterClick("new") || filterCarsByDate()}
        >
          New car
        </p>
        <p
          className={classNames(s.cars_filter_title, {
            [s.cars_filter_title_active]: selectedFilter === "popular",
          })}
          onClick={() => handleFilterClick("popular") || sortByRented()}
        >
          Most popular
        </p>
        <p
          className={classNames(s.cars_filter_title, {
            [s.cars_filter_title_active]: selectedFilter === "daily",
          })}
          onClick={() => handleFilterClick("daily") || sortByDaily()}
        >
          Daily
        </p>
      </div>
      <div className={s.cars_catalog}>
        {cars.map((car) => {
          return <ShowCarsCard key={car.id} img={car.img} title={car.title} />;
        })}
      </div>
      <div className={s.cars_catalog_btn}>
        <button onClick={() => setOpen(true)}>View all</button>
      </div>
      <Modal
		padding="10px"
	  	footer={false}
        centered
        open={open}
        closable={true}
        onCancel={() => setOpen(false)}
        width={1000}
		className="modalStyle"
      >
        {cars.map((item) => {
          return <ShowCarsCardForModal key={item.id} img={item.img} title={item.title}/>;
        })}
      </Modal>
    </section>
  );
};

export default ShowCars;
