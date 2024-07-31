import ReviewCard from "../components/ReviewCard";
import { reviews } from "../assets/constants";
const CustomerReviews = () => {
  return ( 

    <section className="max-container ">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What our <span className="text-coral-red">Customers </span>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis nihil explicabo, reiciendis odio eaque molestiae et vero mollitia odit optio velit maiores quae vel ducimus.</p>
      
      <div className="mt-24 flex flex-1 justify-evenly max-lg:flex-col gap-14">{reviews.map((review)=> (
        <ReviewCard key={review.customerName} imgUrl={review. imgURL} rating={review.rating} customerName= {review.customerName} feedback ={review.feedback}/>
      ))}</div>
    </section>


   );
}
 
export default CustomerReviews;