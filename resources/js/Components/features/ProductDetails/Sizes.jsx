import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/ui/select/select"

export function Sizes() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select size" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="M">M</SelectItem>
          <SelectItem value="L">L</SelectItem>
          <SelectItem value="XL">XL</SelectItem>
          <SelectItem value="XXL">XXL</SelectItem>
          <SelectItem value="S">S</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
