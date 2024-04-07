import "../styles/Welcome.scss"; // Import your stylesheet
import { Button } from "@chakra-ui/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const yourImageUrl = "src/assets/naran1.jpg"; // Replace with your image URL
  const yourName = "M Affan Saleem"; // Replace with your actual name
  const bio =
    "I am a passionate software engineer with a strong foundation in both front-end and back-end development. I enjoy crafting elegant solutions that bridge the gap between design and functionality. Adept at utilizing various technologies to create robust and user-friendly applications."; // Replace with your bio
  const navigate = useNavigate(); // Get the useNavigate hook

  const handleGetStartedClick = () => {
    navigate("/app");
  };
  return (
    <div className="welcome-container">
      <img src={yourImageUrl} alt="Your Name" className="profile-image" />
      <h1>{yourName}</h1>
      <p className="bio">{bio}</p>
      <Button
        rightIcon={<IoIosArrowRoundForward />}
        colorScheme="teal"
        variant="outline"
        onClick={handleGetStartedClick} // Handle click event
      >
        Get Started
      </Button>
    </div>
  );
}

export default Welcome;
