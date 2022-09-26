import "./form.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { cities, applcationTypeData, countryData, today } from "./data";

export default function Form() {
  const [imagePreview, setImagePreview] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, dirtyFields },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      country: "Azerbaijan",
      date: today,
      // which_application: "",
    },
  });
  console.log(dirtyFields, "dirtyFields");

  // get values with watch method
  const [applicationType, country] = watch([
    "applicationType",
    "country",
    "city",
    "myImage",
  ]);

  // on submit form
  const onSubmit = (data) => {
    console.log("form submited succesfully", data);
    setImagePreview("");
    reset();
  };

  // image preview
  const handleImagePreview = (e) => {
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
      {/* application type */}
      <div className='field-container'>
        <label htmlFor='applicationType'>Application type</label>
        <select id='applicationType' {...register("applicationType")}>
          {applcationTypeData.map((data) => {
            return (
              <option value={data.value} key={data.id}>
                {data.value}
              </option>
            );
          })}
        </select>
      </div>
      {/* radio button */}
      <div className='field-container'>
        <div className='radio-container'>
          <label htmlFor='which_application_main'>main</label>
          <input
            id='which_application_main'
            type='radio'
            name='which_application'
            value='main'
            {...register("which_application", {
              required: true,
            })}
          />
          <label htmlFor='which_application_secondary'>secondary</label>
          <input
            id='which_application_secondary'
            type='radio'
            name='which_application'
            value='secondary'
            {...register("which_application", {
              required: "radio field is required",
            })}
          />
        </div>
        {errors.which_application && (
          <span className='error-message radio-button'>
            {errors.which_application.message}
          </span>
        )}
      </div>
      {/* number buttons */}
      <div className='field-container'>
        <label htmlFor='number'>Number</label>
        <input
          id='number'
          className={errors.number && "error-border"}
          type='text'
          {...register("number", {
            required:
              applicationType === "2" ? "number field is required" : false,
          })}
        />
        {errors.number && (
          <span className='error-message'>{errors.number.message}</span>
        )}
      </div>
      {/* select country */}
      <div className='field-container'>
        <label htmlFor='country'>Country</label>
        <select
          id='country'
          {...register("country", { required: true })}
          onChange={(e) => {
            if (e.target.value !== "Azerbaijan") {
              reset({
                city: "",
                country: e.target.value,
              });
            } else {
              reset({ city: "Baku", country: e.target.value });
            }
          }}
        >
          {countryData.map((country) => {
            return (
              <option value={country.name} key={country.id}>
                {country.name}
              </option>
            );
          })}
        </select>
      </div>
      {/* city */}
      {country === "Azerbaijan" ? (
        <div className='field-container'>
          <label htmlFor='city'>City</label>
          <select id='city' {...register("city", { required: true })}>
            {cities.map((city) => {
              return (
                <option value={city.name} key={city.id}>
                  {city.name}
                </option>
              );
            })}
          </select>
        </div>
      ) : (
        <div className='field-container'>
          <label htmlFor='city'>City</label>
          <input
            id='city'
            type='text'
            {...register("city", {
              required: true,
            })}
          />
        </div>
      )}
      {/* date */}
      <div className='field-container'>
        <label htmlFor='data'>Data</label>
        <input
          id='data'
          type='date'
          {...register("date", {
            required: true,
          })}
        />
      </div>
      {/* note */}
      <div className='field-container note'>
        <label htmlFor='note'>Note</label>
        <textarea
          id='note'
          name='note'
          rows='4'
          cols='47'
          {...register("note")}
        ></textarea>
      </div>
      {/* image */}
      <div className='field-container image'>
        <label htmlFor='image'>image</label>
        <input
          type='file'
          name='myImage'
          accept='.png, .jpg, .jpeg'
          {...register("myImage")}
          onChange={handleImagePreview}
        />
        {imagePreview && (
          <img src={imagePreview} className='preview_image' alt='preview' />
        )}
      </div>
      <input type='submit' className='submit-button' />
    </form>
  );
}
