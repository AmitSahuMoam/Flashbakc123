import { useState, useEffect } from "react";
import { getTestimonials } from "../services/Testimonials";
import { getBlogs } from "../services/Blogs";
import { supabase } from "../supabaseClient/supabaseClient";

const QUESTION_ITEMS_PER_PAGE = 4;
const PHOTO_STORY_ITEMS_PER_PAGE = 8;
const VIDEO_STORY_ITEMS_PER_PAGE = 6;
const TESTIMONIAL_PER_PAGE = 6;

const useFetchData = () => {
  const [photoStoriesData, setPhotoStoriesData] = useState([]);
  const [photoStoriesAllData, setPhotoStoriesAllData] = useState([]);
  const [videoStoriesData, setVideoStoriesData] = useState([]);
  const [videoStoriesAllData, setVideoStoriesAllData] = useState([]);
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [testimonialsAllData, setTestimonialsAllData] = useState([]);
  const [blogsData, setBlogsData] = useState([]);
  const [questionsData, setQuestionsData] = useState([]);
  const [questionPage, setQuestionPage] = useState(1);
  const [photoStorySingleData, setPhotoStorySingleData] = useState(null);
  const [videoStorySingleData, setVideoStorySingleData] = useState(null);
  const [photoStoryPage, setPhotoStoryPage] = useState(1);
  const [videoStoryPage, setVideoStoryPage] = useState(1);
  const [testimonialPage, setTestimonialPage] = useState(1);
  const [photoStoryNextPrevious, setPhotoStoryNextPrevious] = useState(null);

  const fetchPhotoStoryNextPrevious = async (id) => {
    id = parseInt(id);
    const nextId = id + 1;
    const previousId = id - 1;
    try {
      const { data: nextData, error: nextError } = await supabase
        .from("PhotoStories")
        .select("firstPersonName, secondPersonName")
        .eq("id", nextId);

      const { data: previousData, error: previousError } = await supabase
        .from("PhotoStories")
        .select("firstPersonName, secondPersonName")
        .eq("id", previousId);

      if (nextError || previousError) {
        throw new Error("Error while fetching Photo Story Single Data");
      }
      console.log(nextData, previousData);
      setPhotoStoryNextPrevious([
        previousData[0] ? previousData[0] : null,
        nextData[0] ? nextData[0] : null,
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchAllPhotoStories = async () => {
    try {
      const { data, error } = await supabase.from("PhotoStories").select("*");

      if (error) {
        throw new Error("Error while fetching Photo Stories");
      }

      setPhotoStoriesAllData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchPhotoStories = async () => {
    try {
      const { data, error } = await supabase
        // .from('PhotoStories')
        // .select('*')
        // .range((photoStoryPage - 1) * PHOTO_STORY_ITEMS_PER_PAGE, photoStoryPage * PHOTO_STORY_ITEMS_PER_PAGE - 1)
        // .order('created_at', { ascending: true });
        .from("PhotoStories")
        .select("*")
        .range(
          (photoStoryPage - 1) * PHOTO_STORY_ITEMS_PER_PAGE,
          photoStoryPage * PHOTO_STORY_ITEMS_PER_PAGE - 1
        )
        .order("created_at", { ascending: true });

      if (error) {
        throw new Error("Error while fetching Photo Stories");
      }

      setPhotoStoriesData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  async function fetchPhotoStorySingleData(id) {
    try {
      const { data, error } = await supabase
        .from("PhotostoriesSingle")
        .select("*")
        .eq("id", id);

      console.log(data);
      setPhotoStorySingleData(data[0]);
      if (error) {
        throw new Error("Error while fetching Photo Story Single Data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  async function fetchVideoStorySingleData(id) {
    try {
      const { data, error } = await supabase
        .from("VideostoriesSingle")
        .select("*")
        .eq("id", id);

      console.log(data);
      setVideoStorySingleData(data[0]);
      if (error) {
        throw new Error("Error while fetching Video Story Single Data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const fetchAllVideoStories = async () => {
    try {
      const { data, error } = await supabase
        .from("VideoStories")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        throw new Error("Error while fetching Video Stories");
      }

      setVideoStoriesAllData(data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchVideoStories = async () => {
    try {
      const { data, error } = await supabase
        // .from('VideoStories')
        // .select('*')
        // .range((videoStoryPage - 1) * VIDEO_STORY_ITEMS_PER_PAGE, videoStoryPage * VIDEO_STORY_ITEMS_PER_PAGE - 1)
        // .order('created_at', { ascending: true });
        .from("VideoStories")
        .select("*")
        .range(
          (videoStoryPage - 1) * VIDEO_STORY_ITEMS_PER_PAGE,
          videoStoryPage * VIDEO_STORY_ITEMS_PER_PAGE - 1
        )
        .order("created_at", { ascending: true });

      if (error) {
        throw new Error("Error while fetching Video Stories");
      }

      setVideoStoriesData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAllTestimonials = async () => {
    try {
      const { data, error } = await getTestimonials();
      if (error) {
        throw new Error("Error while fetching FAQs");
      }
      setTestimonialsAllData(data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from("Testimonials")
        .select("*")
        .range(
          (testimonialPage - 1) * TESTIMONIAL_PER_PAGE,
          testimonialPage * TESTIMONIAL_PER_PAGE - 1
        )
        .order("created_at", { ascending: true });
      if (error) {
        throw new Error("Error while fetching FAQs");
      }
      setTestimonialsData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBlogs = async () => {
    try {
      const { data, error } = await getBlogs();
      if (error) {
        throw new Error("Error while fetching FAQs");
      }
      setBlogsData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAllQuestionsAnswers = async () => {
    try {
      const { data, error, count } = await supabase
        .from("Questions")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        throw new Error("Error while fetching Questions");
      } else {
        setQuestionsAllData(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const fetchQuestionsAnswers = async () => {
    try {
      const { data, error, count } = await supabase
        // .from('Questions')
        // .select('*')
        // .range((questionPage - 1) * QUESTION_ITEMS_PER_PAGE, questionPage * QUESTION_ITEMS_PER_PAGE - 1)
        // .order('created_at', { ascending: true });
        .from("Questions")
        .select("*")
        .range(
          (questionPage - 1) * QUESTION_ITEMS_PER_PAGE,
          questionPage * QUESTION_ITEMS_PER_PAGE - 1
        )
        .order("created_at", { ascending: true });

      if (error) {
        throw new Error("Error while fetching Questions");
      } else {
        setQuestionsData(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchQuestionsAnswersAdmin = async () => {
    try {
      const { data, error } = await supabase
        .from("Questions")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        throw new Error("Error while fetching Questions");
      } else {
        setQuestionsData(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchQuestionsAnswers();
  }, [questionPage]);

  useEffect(() => {
    fetchPhotoStories();
  }, [photoStoryPage]);

  useEffect(() => {
    fetchVideoStories();
  }, [videoStoryPage]);

  useEffect(() => {
    fetchTestimonials();
  }, [testimonialPage]);

  return {
    fetchAllPhotoStories,
    photoStoriesAllData,
    photoStoriesData,
    fetchPhotoStories,
    fetchAllVideoStories,
    videoStoriesAllData,
    videoStoriesData,
    fetchVideoStories,
    fetchAllTestimonials,
    testimonialsAllData,
    testimonialPage,
    setTestimonialPage,
    testimonialsData,
    fetchTestimonials,
    fetchPhotoStorySingleData,
    photoStoryNextPrevious,
    fetchPhotoStoryNextPrevious,
    blogsData,
    fetchBlogs,
    fetchQuestionsAnswers,
    fetchQuestionsAnswersAdmin,
    questionsData,
    questionPage,
    setQuestionPage,
    photoStoryPage,
    setPhotoStoryPage,
    videoStoryPage,
    setVideoStoryPage,
    photoStorySingleData,
    videoStorySingleData,
    fetchVideoStorySingleData,
    fetchPhotoStorySingleData,
  };
};

export default useFetchData;
export {
  PHOTO_STORY_ITEMS_PER_PAGE,
  VIDEO_STORY_ITEMS_PER_PAGE,
  QUESTION_ITEMS_PER_PAGE,
  TESTIMONIAL_PER_PAGE,
};
