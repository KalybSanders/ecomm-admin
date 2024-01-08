export default function AuthLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        // This div can be styled however we want.
        // This will be reflected in all the routes and children of this group.
        <div className="flex items-center justify-center h-full">
            {children}
        </div>
    )
}