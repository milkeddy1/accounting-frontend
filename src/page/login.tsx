import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google"

function Login() {
  return (
    <div className="bg-[black] h-[100dvh] flex items-center justify-center">
      <Card className="">
        <CardHeader>
          <CardTitle className="text-center">LOGIN</CardTitle>
        </CardHeader>
        <CardContent>
          <GoogleOAuthProvider clientId={process.env.VITE_GOOGLE_CLIENT || ""}>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse)
              }}
              onError={() => {
                console.log("Login Failed")
              }}
            />
          </GoogleOAuthProvider>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login
