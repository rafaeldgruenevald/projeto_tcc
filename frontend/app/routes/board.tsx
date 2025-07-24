import * as React from "react";
import type { Route } from "./+types/home";

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Board" },
        { name: "this is the board screen", content: "test" },
    ];
}

export default function Board() {
    const [position, setPosition] = React.useState("Publico");
    return (
        <main className="h-screen w-screen flex flex-col">
            <div className="h-12 flex flex-row m-2 items-center">
                <h1 className="flex flex-1 text-2xl font-semibold">
                    Nome do Board
                </h1>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="ml-2">Acesso</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-32">
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                            value={position}
                            onValueChange={setPosition}
                        >
                            <DropdownMenuRadioItem value="Publico">
                                Publico
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="Privado">
                                Privado
                            </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Button className="ml-2 mr-2">Compartilhar</Button>
                <Avatar className="border-2 border-zinc-300">
                    <AvatarImage
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F83%2F152%2Fpng-transparent-thought-thinking-man-miscellaneous-people-necktie.png&f=1&nofb=1&ipt=1d42a4a1239009a315c9e981b3249f6a7872d587f46ad45061d4be24e5057325"
                        alt="@responsavel"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex flex-1 flex-row overflow-scroll p-8">
                <Card className="h-fit max-h-full w-full min-w-sm max-w-sm border-2 border-zinc-300 overflow-scroll m-5">
                    <CardHeader>
                        <CardTitle>Titulo da lista</CardTitle>
                        <CardDescription className="truncate">
                            Uma pequena descricao sobre a lista
                        </CardDescription>
                        <CardAction>
                            <Button>Edit</Button>
                        </CardAction>
                    </CardHeader>
                    <CardContent>
                        <Card className="border-2 border-zinc-300 mb-2">
                            <CardHeader>
                                <CardTitle>Exemplo de Item</CardTitle>
                                <CardDescription className="truncate">
                                    Uma pequena descricao sobre o item
                                </CardDescription>
                                <CardAction>
                                    <Avatar className="border-2 border-zinc-300">
                                        <AvatarImage
                                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F83%2F152%2Fpng-transparent-thought-thinking-man-miscellaneous-people-necktie.png&f=1&nofb=1&ipt=1d42a4a1239009a315c9e981b3249f6a7872d587f46ad45061d4be24e5057325"
                                            alt="@responsavel"
                                        />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </CardAction>
                            </CardHeader>
                        </Card>
                        <Card className="border-2 border-zinc-300 mb-2">
                            <CardContent className="text-center">
                                Adicionar Item
                            </CardContent>
                        </Card>
                    </CardContent>
                </Card>
                <Card className="h-fit max-h-full w-full min-w-sm max-w-sm border-2 border-zinc-300 overflow-scroll m-5">
                    <CardHeader>
                        <CardTitle>Titulo da lista</CardTitle>
                        <CardDescription className="truncate">
                            Uma pequena descricao sobre a lista
                        </CardDescription>
                        <CardAction>
                            <Button>Edit</Button>
                        </CardAction>
                    </CardHeader>
                    <CardContent>
                        <Card className="border-2 border-zinc-300 mb-2">
                            <CardHeader>
                                <CardTitle>Exemplo de Item</CardTitle>
                                <CardDescription className="truncate">
                                    Uma pequena descricao sobre o item
                                </CardDescription>
                                <CardAction>
                                    <Avatar className="border-2 border-zinc-300">
                                        <AvatarImage
                                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F83%2F152%2Fpng-transparent-thought-thinking-man-miscellaneous-people-necktie.png&f=1&nofb=1&ipt=1d42a4a1239009a315c9e981b3249f6a7872d587f46ad45061d4be24e5057325"
                                            alt="@responsavel"
                                        />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </CardAction>
                            </CardHeader>
                        </Card>
                        <Card className="border-2 border-zinc-300 mb-2">
                            <CardContent className="text-center">
                                Adicionar Item
                            </CardContent>
                        </Card>
                    </CardContent>
                </Card>
                <Card className="h-fit max-h-full w-full min-w-sm max-w-sm border-2 border-zinc-300 m-5">
                    <CardContent className="text-center">
                        Adicionar Lista
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
