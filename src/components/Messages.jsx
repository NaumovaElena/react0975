import pageImg from "../assets/img/sea600x400.jpg";
import textBackground from "../assets/img/bkgr_sea.jpg";

const Messages = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <img src={pageImg} alt="" width={"100%"} />
        </div>
        <div className="col-md-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          sint voluptatibus reprehenderit quae numquam obcaecati minus non
          impedit. Cumque aut ratione nihil accusantium nisi, exercitationem
          inventore quod! Saepe, numquam minima. Eligendi cumque deserunt ipsa
          amet inventore at earum adipisci consequuntur repellendus officiis,
          dolorem mollitia, expedita accusamus, nisi veniam! Recusandae enim
          praesentium nemo eius minus inventore at ea autem nihil explicabo.
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 offset-6" style={{backgroundImage: `url(${textBackground})`, color: "lightblue"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam accusamus reprehenderit dolores nobis illum, fuga nemo minus necessitatibus eveniet nesciunt, numquam hic quo eos pariatur, inventore sapiente voluptas quae quaerat!</div>
      </div>
    </>
  );
};
 export default Messages;