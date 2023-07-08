import React from 'react'
import "./Faq.css"
const Faq = () => {
  return (
    <section id="FAQ">
 <div className="lg-container routing-faq mx-auto containerreview all-body">
                <div className="row">
                    <div className="col-md-10 mx-auto text-center">
                        <h2 className="display-6 fw-bold">Frequently Asked Questions.</h2>
                        <div className="col-lg-6 mx-auto">
                            <p>Here are a few questions we get the most. If you don't see what's on your mind reach out us anytime on email.</p>
                        </div>
                    </div>


    <section className="mt-5">
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="accordion accordion-flush" id="faqlist">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                            What is Roadmap?</button>
                        </h2>
                        <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div className="accordion-body">
                            A roadmap is a flexible planning schedule that outlines the future plans and goals of a project, task or organization.
                             It usually includes milestones 📅 strategies tactics. It can help you stay focused motivated and organized
                              throughout your learning journey.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                            How do roadmaps benefits me?
                            </button>
                        </h2>
                        <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div className="accordion-body">
                            Think of your roadmap as a promise. This forces you to be judicious about what you
                             choose to commit to. When each work item clearly aligns with your overall objectives, 
                             you can be confident that you are investing your time wisely. Only include the initiatives 
                             and tasks that are most important for achieving your goals.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                            What Does a Back-End Developer Do?
                            </button>
                        </h2>
                        <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div className="accordion-body">
                            Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions like data storage, security, and other server-side functions that you cannot see on websites.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                            What is digital marketing?
                            </button>
                        </h2>
                        <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div className="accordion-body">
                            Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                            I can't find the particular roadmap?
                            </button>
                        </h2>
                        <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                            <div className="accordion-body">
                            We're really sorry that the roadmap you are searching was not available for the time being. You can just mail us about your topic 
                            and we will try to upload the roadmap as soon as possible. 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</section>

</div>
</div>
</section>
  )
}

export default Faq