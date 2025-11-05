import React from "react";

export default function CommonHeader({
  title = "How we work",
  titleClass = "text-p text-5xl font-semibold",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  descClass = "text-p w-[405px] pt-4"
}) {
  return (
    <div>
      <h2 className={titleClass}>
        {title}
      </h2>
      <p className={descClass}>
        {description}
      </p>
    </div>
  );
}
