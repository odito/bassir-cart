import { FILTER_PRODUCTS_SIZE } from "../types";
import { ORDER_PRODUCTS_PRICE } from "../types";

const { FETCH_PRODUCTS } = require("../types");


export const productsReducer = (state={}, action)=>{

    switch(action.type){

      case FILTER_PRODUCTS_SIZE:
          return {
              ...state,
              size:action.payload.size,
              filterItems:action.payload.items,

          }

       case ORDER_PRODUCTS_PRICE:
           return {
               ...state,
               sort:action.payload.sort,
               filterItems:action.payload.items
           }   

      case FETCH_PRODUCTS:
          return{
              items:action.payload, filterItems:action.payload
          }

         

          default:
              return state
    }
}