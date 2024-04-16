"use client";
import SelectOption from "@/components/ui/selectOption";
import { langList, langModel } from "@/utils/langList";
import React from "react";

export default function ReWriter() {
  const onChange = (option: langModel) => {};
  return (
    <div>
      <SelectOption
        isSearchable={true}
        name="english"
        label="lang"
        options={langList}
        onChange={onChange}
      />
    </div>
  );
}
