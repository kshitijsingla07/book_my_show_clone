import React from "react";
import { Disclosure } from '@headlessui/react'
import {BsChevronDown, BsChevronUp} from "react-icons/bs";
const PlaysFilter = (props) => {
  return (
<div className="bg-white w-4/5 my-3 pb-3 pt-2 h-1/2">
    <Disclosure>
      {({ open }) => (
        <>
      <Disclosure.Button className="py-2 flex items-center gap-2 ml-5">
      {open ? <BsChevronUp/> : <BsChevronDown />}

      <span className = {open? "text-red-600" : "text-gray-800"}>
      {props.title}
      </span>

      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500 ml-5">
        <div className ="flex item-center gap-3 flex-wrap">
        { props.tags.map((tag) => (
          <>
          <div className = "border-2 border-gray-200 p-3">
<span className = "text-red-600">{tag}</span>
          </div>
          </>

        ))}
        </div>
      </Disclosure.Panel>
      </>
    )}
    </Disclosure>
</div>
  )
}



export default PlaysFilter;
