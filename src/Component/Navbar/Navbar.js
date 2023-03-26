import { AiOutlineStrikethrough } from "react-icons/ai";
import { BiBold, BiItalic, BiUnderline } from "react-icons/bi";
import { FaQuoteRight , FaSuperscript , FaSubscript} from "react-icons/fa";
import { BsTextCenter , BsTextLeft ,BsTextRight} from "react-icons/bs";
import { RxFontFamily } from "react-icons/rx";
import { FaHighlighter } from "react-icons/fa";
import { GoTextSize } from "react-icons/go";



import {
  MdInsertLink,
  MdChecklist,
  MdOutlineFormatListBulleted,
  MdOutlineFormatListNumbered,
  MdOutlineFormatColorText,
  MdFormatIndentDecrease,
  MdFormatIndentIncrease,
  MdFormatClear
} from "react-icons/md";
import { RiGalleryLine } from "react-icons/ri";
import { FiAlignJustify } from "react-icons/fi";
import { RxTextAlignMiddle } from "react-icons/rx"; 
import style from './Navbar.module.css'


export default function Navbar() {
    return(
        <>
      <div className={style.main}>
        <BiBold className={style.icon}/>
        <BiItalic className={style.icon} />
        <BiUnderline className={style.icon}/>
        <AiOutlineStrikethrough className={style.icon}/>
        <MdOutlineFormatColorText className={style.icon}/>
        <GoTextSize className={style.icon}/>
        <FaHighlighter className={style.icon}/>
        <div className={style.fontFamily}>
        <p>Arial</p>
        <RxFontFamily className={style.icon}/>
        </div>
        <FaQuoteRight className={style.icon}/>
        <MdInsertLink className={style.icon}/>
        <RiGalleryLine className={style.icon}/>
        <MdOutlineFormatListBulleted className={style.icon}/>
        <MdOutlineFormatListNumbered className={style.icon}/>
        <MdChecklist className={style.icon}/>
        <FaSuperscript className={style.icon}/>
        <FaSubscript className={style.icon}/>
        <MdFormatIndentDecrease className={style.icon} />
        <MdFormatIndentIncrease className={style.icon}/>
        <MdFormatClear className={style.icon}/>
        <FiAlignJustify className={style.icon}/>
        <BsTextCenter className={style.icon}/>
        <BsTextLeft className={style.icon}/>
        <BsTextRight className={style.icon}/>
        <RxTextAlignMiddle className={style.icon}/>
        </div>
        </>
    )
}