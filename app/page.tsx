import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Terminal, Code, Download } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.png-PgaEYYsoY92MIakcUYQEBTtCB8r57b.jpeg"
              alt="Sova CLI"
              width={32}
              height={32}
              className="rounded-sm"
            />
            <span className="text-xl font-bold">Sova CLI</span>
          </Link>
          <nav className="ml-auto flex items-center gap-6">
            <Link className="text-sm font-medium" href="#features">
              Features
            </Link>
            <Link className="text-sm font-medium" href="#install">
              Install
            </Link>
            <Link className="text-sm font-medium" href="#usage">
              Usage
            </Link>
            <Link
              className="text-sm font-medium"
              href="https://github.com/go-sova/sova-cli"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-primary py-20 text-primary-foreground md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Modern Go Project Scaffolding
                  </h1>
                  <p className="text-xl text-primary-foreground/80">
                    A simple and interactive CLI tool for initializing Go projects, just like npm init, but for Go!
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link href="#install">
                    <Button className="bg-background text-primary hover:bg-background/90">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="https://github.com/go-sova/sova-cli" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-primary-foreground bg-primary-foreground/10">
                      <Github className="mr-2 h-4 w-4" /> View on GitHub
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="rounded-lg bg-primary-foreground/20 p-4 backdrop-blur-sm">
                  <pre className="overflow-x-auto text-sm text-primary-foreground">
                    <code>
                      {`$ go install github.com/go-sova/sova-cli@latest

$ sova-cli init my-project
✓ Project initialized with best practices

$ cd my-project
$ ls
cmd/
internal/
docs/
scripts/
templates/
tests/
go.mod
main.go
README.md`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight">Features</h2>
              <p className="mt-4 text-lg text-muted-foreground">Generate production-ready project templates in seconds</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center rounded-lg border p-6 bg-card text-card-foreground">
                <Terminal className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-bold">Interactive Setup</h3>
                <p className="text-center text-muted-foreground">
                  Simple CLI interface that guides you through project creation
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg border p-6 bg-card text-card-foreground">
                <Code className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-bold">Best Practices</h3>
                <p className="text-center text-muted-foreground">
                  Follows Go community standards with proper project structure
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg border p-6 bg-card text-card-foreground">
                <Download className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-bold">Production Ready</h3>
                <p className="text-center text-muted-foreground">Start with a solid foundation for your Go applications</p>
              </div>
            </div>
          </div>
        </section>

        <section id="install" className="bg-muted py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight">Installation</h2>
              <p className="mt-4 text-lg text-muted-foreground">Quick and easy setup to get started</p>
            </div>
            <div className="mx-auto max-w-2xl space-y-6">
              <div className="rounded-lg bg-card p-4">
                <h3 className="mb-2 text-lg font-medium text-card-foreground">Quick Install - Linux/macOS</h3>
                <pre className="overflow-x-auto text-sm bg-muted p-2 rounded">
                  <code>{`curl -fsSL https://raw.githubusercontent.com/meyanksingh/go-sova/master/scripts/install.sh | bash`}</code>
                </pre>
              </div>
              <div className="rounded-lg bg-card p-4">
                <h3 className="mb-2 text-lg font-medium text-card-foreground">Quick Install - Windows (Command Prompt)</h3>
                <pre className="overflow-x-auto text-sm bg-muted p-2 rounded">
                  <code>{`curl -fsSL -o install.bat https://raw.githubusercontent.com/go-sova/sova-cli/master/scripts/install.bat && install.bat`}</code>
                </pre>
              </div>
              <div className="rounded-lg bg-card p-4">
                <h3 className="mb-2 text-lg font-medium text-card-foreground">Using Go Install</h3>
                <pre className="overflow-x-auto text-sm bg-muted p-2 rounded">
                  <code>{`go install github.com/go-sova/sova-cli@latest`}</code>
                </pre>
              </div>
              <div className="rounded-lg bg-card p-4">
                <h3 className="mb-2 text-lg font-medium text-card-foreground">From Source</h3>
                <pre className="overflow-x-auto text-sm bg-muted p-2 rounded">
                  <code>
                    {`git clone https://github.com/go-sova/sova-cli.git
cd sova-cli
go build -o sova
mv sova-cli /usr/local/bin/`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section id="usage" className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight">Usage</h2>
              <p className="mt-4 text-lg text-muted-foreground">Simple commands to scaffold your Go projects</p>
            </div>
            <div className="mx-auto max-w-3xl rounded-lg border p-6 bg-card">
              <h3 className="mb-4 text-xl font-bold">Creating a new project</h3>
              <pre className="mb-6 rounded-md bg-muted p-4 text-sm">
                <code>{`sova init my-project`}</code>
              </pre>

              <h4 className="mb-2 text-lg font-semibold">Project Structure</h4>
              <pre className="rounded-md bg-muted p-4 text-sm">
                <code>{`my-project/
├── cmd/           # Main applications
├── docs/          # Documentation
├── internal/      # Private code
├── scripts/       # Build and deployment scripts
├── templates/     # Template files
├── tests/         # Test files
├── go.mod         # Go module file
├── main.go        # Entry point
└── README.md      # Project documentation`}</code>
              </pre>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.png-PgaEYYsoY92MIakcUYQEBTtCB8r57b.jpeg"
              alt="Sova CLI"
              width={24}
              height={24}
              className="rounded-sm"
            />
            <p className="text-sm text-muted-foreground">© 2025 Sova CLI. MIT License.</p>
          </div>
          <nav className="flex gap-4">
            <Link
              className="text-sm text-muted-foreground hover:underline"
              href="https://github.com/go-sova/sova-cli"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            <Link
              className="text-sm text-muted-foreground hover:underline"
              href="https://github.com/go-sova/sova-cli/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              Issues
            </Link>
            <Link
              className="text-sm text-muted-foreground hover:underline"
              href="https://github.com/go-sova/sova-cli/blob/master/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
            >
              License
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}