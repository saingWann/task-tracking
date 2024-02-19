import React, { useEffect } from "react";

import {
  UserCircle,
  Briefcase,
  BookOpenText,
  Home,
  Trash2,
  MenuSquare,
  CheckCircle2,
} from "lucide-react";

const iconType = ({ type }) => {
  if (type === "Personal") {
    return <UserCircle size={20} />;
  } else if (type === "Home") {
    return <Home size={20} />;
  } else if (type === "Study") {
    return <BookOpenText size={20} />;
  } else if (type === "Business") {
    return <Briefcase size={20} />;
  } else if (type === "All") {
    return <MenuSquare size={20} />;
  } else if (type === "Done") {
    return <CheckCircle2 size={20} />;
  } else {
    return <Trash2 size={20} />;
  }
};
export default iconType;
