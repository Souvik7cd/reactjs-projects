import Tabs from "./Tabs";
import "./Tabs.css";

const CustomTabs = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: (
        <div>
          <h2>Hello world</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magni
            delectus nisi reiciendis dicta vero corporis cupiditate sequi
            distinctio necessitatibus est nam aliquam, harum numquam eius
            quibusdam nihil quos iste.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad officia
            facere maiores fugit aliquam beatae asperiores repudiandae eos
            aliquid iure amet dolorem architecto vitae sapiente corrupti fugiat
            dicta, magni incidunt. Nisi libero voluptate perferendis accusamus.
            Aut accusamus labore facilis quod unde atque, optio quam officia
            amet. Obcaecati illo omnis quae, rerum natus atque eaque autem quos
            maxime consequatur enim cupiditate!
          </p>
        </div>
      ),
    },
    {
      label: "Tab 2",
      content: (
        <div>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            vel qui dolore corrupti molestias debitis est mollitia distinctio
            labore sed nihil, accusamus aliquam illum id cumque natus beatae cum
            impedit?
          </p>
          <p>
            Necessitatibus veritatis deleniti in saepe. Illo ducimus quos
            veritatis possimus, deleniti blanditiis optio molestias similique
            reprehenderit officia voluptatibus sit dolorem eveniet soluta
            tempore. Tenetur omnis voluptatum ipsa, asperiores eius voluptates.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            amet consequuntur dolorem est nemo earum quos maiores adipisci,
            aliquam reiciendis aliquid odit maxime deleniti sed eaque ipsum aut
            veniam esse! Velit ea id officiis ratione optio accusantium dolores.
            Labore fuga assumenda at, et aperiam inventore nulla adipisci
            voluptatum in a dignissimos qui fugit perspiciatis architecto
            expedita quisquam officiis earum fugiat? Cupiditate laborum nemo
            officia dolorem quis. Illum, similique adipisci. Culpa corporis
            accusamus repudiandae dicta in quisquam, voluptate labore blanditiis
            odio debitis delectus, dolore sed molestiae dolor vitae aspernatur
            earum amet!
          </p>
        </div>
      ),
    },
    {
      label: "Tab 3",
      content: (
        <>
          <button>Hello</button>
          <br /><br />
          <button>Hey</button>
        </>
      ),
    },
  ];

  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };

  return (
    <div className="tabs-wrapper bg-tabs">
      <h1>CustomTabs</h1>
      <Tabs tabsContent={tabs} onChange={handleChange} />
    </div>
  );
};

export default CustomTabs;
