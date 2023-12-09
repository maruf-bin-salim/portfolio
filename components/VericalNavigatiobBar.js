import styles from "@/components/styles/vertical_navigation_bar.styles.module.css";


export default function VerticalNavigationBar({ }) {
    return (
        <div className={styles.main}>

            {/* profile picture */}
            <img
                src="/self_potrait.png" alt="profile picture"
                className={styles.profile_picture}
            />

            {/* container for name and designation */}
            <div className={styles.name_and_designation_container}>

                {/* name */}
                <h1 className={styles.name}>
                    MARUF
                </h1>

                {/* designation */}
                <h2 className={styles.designation}>
                    Full Stack Web Developer
                </h2>

            </div>

            {/* container for navigation links */}
            <div className={styles.navigation_links_container}>

                {/* nav item  */}
                <div className={styles.navigation_item}>

                    {/* navigation icon */}
                    <img
                        src="/self_potrait.png" alt="home icon"
                        className={styles.navigation_icon}
                    />

                    <a href="#" className={styles.navigation_link}>
                        Home
                    </a>
                </div>

                {/* nav item  */}
                <div className={styles.navigation_item}>

                    {/* navigation icon */}
                    <img
                        src="/self_potrait.png" alt="About icon"
                        className={styles.navigation_icon}
                    />


                    <a href="#" className={styles.navigation_link}>
                        About
                    </a>
                </div>

                {/* nav item  */}
                <div className={styles.navigation_item}>

                    {/* navigation icon */}
                    <img
                        src="/self_potrait.png" alt="Projects icon"
                        className={styles.navigation_icon}
                    />


                    <a href="#" className={styles.navigation_link}>
                        Projects
                    </a>
                </div>

                {/* nav item  */}
                <div className={styles.navigation_item}>

                    {/* navigation icon */}
                    <img
                        src="/self_potrait.png" alt="Contact icon"
                        className={styles.navigation_icon}
                    />


                    <a href="#" className={styles.navigation_link}>
                        Contact
                    </a>
                </div>



            </div>



        </div>
    );
}