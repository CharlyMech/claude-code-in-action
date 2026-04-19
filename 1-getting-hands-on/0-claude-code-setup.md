# Time to get Claude Code set up locally

Full setup directions can be found here: <https://code.claude.com/docs/en/quickstart>

In short, you'll need to do the following:

1. Install Claude Code
   - a. MacOS (Homebrew): `brew install --cask claude-code`
   - b. MacOS, Linux, WSL: `curl -fsSL https://claude.ai/install.sh | bash`
   - c. Windows CMD: `curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd`
2. After installation, run claude at your terminal. The first time you run this command you will be prompted to authenticate

If you're making use of AWS Bedrock or Google Cloud Vertex, there is some additional setup:

- Special directions for AWS Bedrock: <https://code.claude.com/docs/en/amazon-bedrock>
- Special directions for Google Cloud Vertex: <https://code.claude.com/docs/en/google-vertex-ai>
