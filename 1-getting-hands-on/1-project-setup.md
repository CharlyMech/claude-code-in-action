# Working with Claude Code is more interesting if you have a project to work with

I've put together a small project to explore with Claude Code. It is the same UI generation app shown in a previous video. Note: you don't have to run this project. You can always follow along with the remainder of the course with your own code base if you wish!

### Setup

This project requires a small amount of setup:

1. Ensure you have Node JS installed locally. Link to installation directions.
2. Download the zip file called `uigen.zip` attached to this lecture and extract it
3. In the project directory, run `npm run setup` to install dependencies and set up a local SQLite database
4. **Optional**: this project uses Claude through the Anthropic API to generate UI components. If you want to fully test out the app, you will need to provide an API key to access the Anthropic API. This is optional. If no API key is provided, the app will still generate some static fake code. Here's how you can set the api key:
   - a. Get an Anthropic API key at <https://console.anthropic.com/>
   - b. Place your API key in the `.env` file.

5. Start the project by running `npm run dev`

---

### Downloads

[uigen.zip](https://cc.sj-cdn.net/instructor/4hdejjwplbrm-anthropic/assets/1769622681/uigen.zip?response-content-disposition=attachment&Expires=1776620735&Signature=JMIMECFxJaQN~UnR4V~aJpY9XPGXD6IgAAvHb9YpwF-PS95aDtjMvh619e7MHSGH4zch68SVRyLcLPE-GYicGOUuJL9z7-JBvSzkzqqIKf1ASx8Dh476EKEo6AkY6h64LrELx3eOUKrdIwgt6VNmEbZ6B4XlvHh1iLseQQCkEwI8fQTDUVC3NAZ0heaB~TBN-OO5t6Ytzquq5hGrZWz0ZLhcSzEQbQik8Ob272njHI-sW7ERDv3CULeenGvlP6owOx9bzZfNBH0z1FRDHP-8mwpH6c0YGFWfctUeiVUlpZZn3eowT2XmFPc5h2QiRt-TN-GGk1zvhYHd7Uyk61BbyA__&Key-Pair-Id=APKAI3B7HFD2VYJQK4MQ)
