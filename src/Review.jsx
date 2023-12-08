import {useState} from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

export default function Review(){
    const [index, setIndex] = useState(0);
    const { name, image, job, text} = people[index]
    function checkIndex(index){
        if(index>people.length-1){
            return 0;
        }
        if(index<0){
            return people.length-1;
        }
        return index;
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkIndex(newIndex);
        })
    }
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkIndex(newIndex);
        })
    }
    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random()*people.length)
        if(randomNumber === index){
            randomNumber = index +1;
        }
        setIndex(checkIndex(randomNumber))
        
    }
    return (
        <section>
             <div className='review-container'>
                <div className="img-container">
                    <img src={image} alt={name} className="img"/>
                    <span className="quote-icon">
                        <FaQuoteRight/>
                    </span>
                </div>
                <h4 className='author'>{name}</h4>
                <p className="job">{job}</p>
                <p className="info">{text}</p>
                <div className="button-contaienr">
                    <button className='prev-person' onClick={prevPerson}>
                        <FaChevronLeft/>
                    </button>
                    <button className='next-person' onClick={nextPerson}>
                        <FaChevronRight/>
                    </button>
                </div>
                <button onClick={randomPerson}>Surprise Me</button>
             </div>
        </section>

       
    )
}