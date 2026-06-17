// import React from 'react'

export default function TextValidator(e) {
  let { name, value } = e.target
  switch (name) {
    case 'name':
      if (!vlaue || value.length === 0)
        return name + "Field is Mendatory"
      else if (value.length < 2 || vlaue.length > 100)
        return name + "Field Length Must Be 2-100 Characters"
      else
        return ""
    default:
      return ""

  }
}
