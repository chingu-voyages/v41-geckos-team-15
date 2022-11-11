import React from 'react'

const FaqsQuestions = () => {
    return (
        <div>
            <div className='questions-header'>
                <h1>FAQs </h1>
                <p>Have a question? You might find all your answer here</p>
            </div>

            <table className='faqsQuestions'>
            <tbody>
                <tr>
                    <td>Is this online, or do I download software?</td>
                    <td>Expenseless Online is accessible securely from any web browser or through the mobile app. No download of software is required.</td>
                </tr>
                <tr>
                    <td>Can I switch plans or cancel at any time?</td>
                    <td>Yes, you're free to switch Expenseless plans or cancel at any time. Please contact customer support to assist you</td>
                </tr>
                <tr>
                    <td>Do I have to pay extra for mobile apps?</td>
                    <td>Nope! Expenseless comes with a free mobile app that helps you run your business on the go—anytime, anywhere.</td>
                </tr>
                <tr>
                    <td>Is it easy to get started?</td>
                    <td>Absolutely. It only takes about five minutes to get up and running, once you sync your bank or credit card transactions to Expenseless.</td>
                </tr>
                <tr>
                    <td>Can I add my accountant, bookkeeper, or tax pro?</td>
                    <td>Yes, you can invite an accountant to collaborate with you for free with Expenseless. Once they accept your invitation, they can work in your account. You can delete their access anytime.</td>
                </tr>
                </tbody>
            </table>

        </div>
    )
}

export default FaqsQuestions