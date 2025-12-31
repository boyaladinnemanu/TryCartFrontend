import {useState,useEffect} from 'react' 
import Cookies from 'js-cookie'
import axios from 'axios'
import {BounceLoader} from 'react-spinners'
import PlansCard from '../PlansCard'
import Header from '../Header'
import {Primeusercont,Primeuserh1,Primeuserplans} from "./styledComponent"


const plans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: '₹99 / 1 Month',
      description: 'Perfect for users who want to try out Prime benefits for a short time.',
      benefits: [
        'Access to Prime Deals',
        'Early access to new products',
        'Basic support'
      ],
      tagColor: '#B0E0E6' // Light blue
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: '₹249 / 3 Months',
      description: 'Ideal for regular shoppers who want more savings and better service.',
      benefits: [
        'All Basic features',
        'Free delivery on all orders',
        'Priority customer support',
        'Exclusive coupons & deals'
      ],
      tagColor: '#FFD700' // Gold
    },
    {
      id: 'advanced',
      name: 'Advanced Plan',
      price: '₹799 / 12 Months',
      description: 'Best value plan for power users who want premium support and perks.',
      benefits: [
        'All Premium features',
        'Advanced product recommendations',
        'Dedicated support manager',
        'Invitation to Prime-only events'
      ],
      tagColor: '#DAA520' // Darker gold
    }
  ];
  

const Primeuser = ()=>{
    return(
      <>
        <Header/>
        <Primeusercont>
            <Primeuserh1>
                Choose your plan
            </Primeuserh1>
            <Primeuserplans>
                {plans.map(each=><PlansCard id={each.id} Plans={each} />)}
            </Primeuserplans>
        </Primeusercont>
      </>
    )
}

export default Primeuser